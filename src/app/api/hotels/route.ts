import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Hotel from '@/models/Hotel';
import User from '@/models/User';
import { getUserFromRequest } from '@/lib/auth/jwt';

export async function GET(req: Request) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const searchTag = url.searchParams.get('tag');

    let query = {};
    if (searchTag && searchTag !== 'all') {
      query = { tags: searchTag };
    }

    const hotels = await Hotel.find(query).lean();
    return NextResponse.json(hotels, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = getUserFromRequest(req as any);
    if (!user || (user.role !== 'company' && user.role !== 'admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await dbConnect();
    const data = await req.json();

    // Fetch owner email to store on the hotel for email notifications
    const owner = await User.findById(user.userId).select('email').lean() as { email: string } | null;

    const newHotel = await Hotel.create({
      ...data,
      companyId: user.userId,
      ownerEmail: owner?.email || '',
      slug: data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    });

    return NextResponse.json(newHotel, { status: 201 });
  } catch (error) {
    console.error('Create hotel error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

