import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/Booking';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const url = new URL(req.url);
    const checkIn = url.searchParams.get('checkIn');
    const checkOut = url.searchParams.get('checkOut');

    if (!checkIn || !checkOut) {
      return NextResponse.json({ error: 'checkIn and checkOut are required' }, { status: 400 });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate >= checkOutDate) {
      return NextResponse.json({ available: false, reason: 'Check-out must be after check-in' });
    }

    await dbConnect();

    // Check for any confirmed overlapping booking
    const overlap = await Booking.findOne({
      hotelId: id,
      status: 'confirmed',
      checkIn: { $lt: checkOutDate },
      checkOut: { $gt: checkInDate },
    });

    return NextResponse.json({ available: !overlap });
  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
