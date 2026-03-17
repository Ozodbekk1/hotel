import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Hotel from '@/models/Hotel';
import { getUserFromRequest } from '@/lib/auth/jwt';
import { NextRequest } from 'next/server';

// GET /api/hotels/[id]
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await dbConnect();
    const hotel = await Hotel.findById(id).lean();
    if (!hotel) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(hotel);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT /api/hotels/[id]
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = getUserFromRequest(req);
    if (!user || (user.role !== 'company' && user.role !== 'admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    const { id } = await params;
    await dbConnect();
    const hotel = await Hotel.findById(id);
    if (!hotel) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Companies can only edit their own hotels
    if (user.role === 'company' && hotel.companyId.toString() !== user.userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const data = await req.json();
    const updated = await Hotel.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE /api/hotels/[id]
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = getUserFromRequest(req);
    if (!user || (user.role !== 'company' && user.role !== 'admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    const { id } = await params;
    await dbConnect();
    const hotel = await Hotel.findById(id);
    if (!hotel) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (user.role === 'company' && hotel.companyId.toString() !== user.userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    await Hotel.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Hotel deleted' });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
