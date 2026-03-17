import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/Booking';
import Hotel from '@/models/Hotel';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth/jwt';
import { sendBookingNotification } from '@/lib/mailer';

// GET all bookings for the logged-in user
export async function GET(req: Request) {
  try {
    const user = getUserFromRequest(req as any);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const bookings = await Booking.find({ userId: user.userId })
      .populate('hotelId', 'name location image')
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Create a new booking
export async function POST(req: Request) {
  try {
    const user = getUserFromRequest(req as any);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { hotelId, checkIn, checkOut, guests, totalPrice } = await req.json();

    if (!hotelId || !checkIn || !checkOut) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate >= checkOutDate) {
      return NextResponse.json({ error: 'Check-out must be after check-in' }, { status: 400 });
    }

    // ── Availability check: look for any overlapping CONFIRMED booking ──
    const overlap = await Booking.findOne({
      hotelId,
      status: 'confirmed',
      checkIn: { $lt: checkOutDate },
      checkOut: { $gt: checkInDate },
    });

    if (overlap) {
      return NextResponse.json(
        { error: 'Hotel is not available for the selected dates. Please choose different dates.' },
        { status: 409 }
      );
    }

    // ── Fetch guest info for the email ──
    const guestUser = await User.findById(user.userId).select('name email').lean() as { name: string; email: string } | null;
    const guestName = guestUser?.name || 'Guest';
    const guestEmail = guestUser?.email || '';

    // ── Create booking ──
    const newBooking = await Booking.create({
      userId: user.userId,
      hotelId,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guests || 1,
      totalPrice: totalPrice || 0,
      status: 'confirmed',
      guestName,
      guestEmail,
    });

    // ── Atomically push the booked date range to the hotel ──
    const hotel = await Hotel.findByIdAndUpdate(
      hotelId,
      { $push: { bookedDates: { checkIn: checkInDate, checkOut: checkOutDate } } },
      { new: true }
    ).select('name ownerEmail').lean() as { name: string; ownerEmail: string } | null;

    // ── Send email notification to hotel owner (non-blocking) ──
    if (hotel?.ownerEmail) {
      sendBookingNotification({
        ownerEmail: hotel.ownerEmail,
        hotelName: hotel.name,
        guestName,
        guestEmail,
        checkIn: checkInDate.toISOString(),
        checkOut: checkOutDate.toISOString(),
        guests: guests || 1,
        totalPrice: totalPrice || 0,
      }).catch((err) => console.error('[Mailer] Failed to send booking notification:', err));
    }

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

