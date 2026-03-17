import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import Hotel from '@/models/Hotel';
import Booking from '@/models/Booking';
import { getUserFromRequest } from '@/lib/auth/jwt';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const user = getUserFromRequest(req);
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await dbConnect();
    const [totalUsers, totalCompanies, totalHotels, totalBookings] = await Promise.all([
      User.countDocuments({ role: 'user' }),
      User.countDocuments({ role: 'company' }),
      Hotel.countDocuments(),
      Booking.countDocuments(),
    ]);

    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(10).select('-password -refreshToken').lean();
    const recentHotels = await Hotel.find().sort({ createdAt: -1 }).limit(10).lean();

    return NextResponse.json({ totalUsers, totalCompanies, totalHotels, totalBookings, recentUsers, recentHotels });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
