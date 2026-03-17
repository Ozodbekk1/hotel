import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { verifyRefreshToken, signAccessToken } from '@/lib/auth/jwt';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;
    if (!refreshToken) return NextResponse.json({ error: 'No refresh token' }, { status: 401 });

    const payload = verifyRefreshToken(refreshToken);
    if (!payload) return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });

    await dbConnect();
    const user = await User.findById(payload.userId);
    if (!user || user.refreshToken !== refreshToken) {
      return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });
    }

    const newAccessToken = signAccessToken(user._id.toString(), user.role);

    cookieStore.set('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 15 * 60,
      path: '/',
    });

    return NextResponse.json({ accessToken: newAccessToken });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
