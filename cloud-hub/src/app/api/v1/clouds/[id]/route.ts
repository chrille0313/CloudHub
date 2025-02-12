import { Cloud, User } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import { clouds } from '../static_data';

const testUser: User = {
  id: '3622c012-a12e-4c52-9863-4771fb2dbe5a',
  username: 'testUser',
  email: 'test@user1.com',
  verified: true,
  createdAt: new Date(2020, 1, 1),
  updatedAt: new Date(2024, 2, 2)
};

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const cloud = clouds.find((cloud) => cloud.id === id);

  if (!cloud) {
    // TODO: return correct response
    return NextResponse.error();
  }

  return NextResponse.json(cloud);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const updatedCloud: Cloud = {
    id: id,
    name: 'testCloud1',
    owner: testUser,
    allocatedSize: 2000000,
    usedSize: 200000,
    numberOfFiles: 6,
    folders: [],
    createdAt: new Date(2021, 3, 3),
    updatedAt: new Date(2021, 4, 4)
  };

  return NextResponse.json(updatedCloud, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  return NextResponse.json({}, { status: 204 });
}
