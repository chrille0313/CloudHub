import { Cloud, User } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import { clouds } from './static_data';

export async function GET() {
  return NextResponse.json(clouds);
}

export async function POST(request: NextRequest) {
  const body: Pick<Cloud, 'name' | 'allocatedSize'> = await request.json();

  const newCloud: Cloud = {
    id: '8236f7af-c665-4cec-8d25-ea56e2cb3714',
    name: body.name,
    owner: testUser,
    allocatedSize: body.allocatedSize,
    usedSize: 0,
    numberOfFiles: 0,
    folders: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };

  //return NextResponse.json(newCloud, { status: 201 });
  return NextResponse.json(body, { status: 201 });
}
