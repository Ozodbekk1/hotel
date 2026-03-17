import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const signAccessToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, process.env.JWT_ACCESS_SECRET!, { expiresIn: '15m' });
};

export const signRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, { expiresIn: '7d' });
};

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as { userId: string; role: string };
  } catch {
    return null;
  }
};

export const verifyRefreshToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as { userId: string };
  } catch {
    return null;
  }
};

export const getUserFromRequest = (request: NextRequest) => {
  // 1) Try Authorization: Bearer <token> header
  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    const payload = verifyAccessToken(token);
    if (payload) return payload;
  }

  // 2) Fallback: try accessToken cookie
  const cookieToken = request.cookies.get('accessToken')?.value;
  if (cookieToken) {
    return verifyAccessToken(cookieToken);
  }

  return null;
};
