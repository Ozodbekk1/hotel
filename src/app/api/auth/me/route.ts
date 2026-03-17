import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth/jwt';
import { NextRequest } from 'next/server';

// GET /api/auth/me — get current user profile
export async function GET(req: NextRequest) {
  try {
    const user = getUserFromRequest(req);
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await dbConnect();
    const profile = await User.findById(user.userId).select('-password -refreshToken').lean();
    if (!profile) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    return NextResponse.json(profile);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
