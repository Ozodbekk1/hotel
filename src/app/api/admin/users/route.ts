import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth/jwt';
import { NextRequest } from 'next/server';

// GET all users (admin only)
export async function GET(req: NextRequest) {
  try {
    const user = getUserFromRequest(req);
    if (!user || user.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    await dbConnect();
    const users = await User.find().select('-password -refreshToken').sort({ createdAt: -1 }).lean();
    return NextResponse.json(users);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
