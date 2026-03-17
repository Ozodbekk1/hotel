import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Hotel from '@/models/Hotel';
import { getUserFromRequest } from '@/lib/auth/jwt';
import { NextRequest } from 'next/server';

// GET all hotels for a specific company
export async function GET(req: NextRequest) {
  try {
    const user = getUserFromRequest(req);
    if (!user || user.role !== 'company') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await dbConnect();
    const hotels = await Hotel.find({ companyId: user.userId }).sort({ createdAt: -1 }).lean();
    
    return NextResponse.json(hotels);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
