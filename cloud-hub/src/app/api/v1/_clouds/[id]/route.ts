import { NextRequest } from 'next/server';
import { getCloudById, updateCloudById, deleteCloudById } from '@/components/Cloud/service';
import { ApiResponseFactory } from '../types';
import { updateCloudSchema } from '@/components/Cloud/types';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const cloud = await getCloudById(id);

  if (!cloud) {
    return ApiResponseFactory.error('Cloud not found', 404);
  }

  return ApiResponseFactory.success(cloud);
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const data = await request.json();

  const validation = updateCloudSchema.safeParse(data);

  if (!validation.success) {
    return ApiResponseFactory.error(validation.error.message, 400);
  }

  const updatedCloud = await updateCloudById(id, validation.data);

  return ApiResponseFactory.success(updatedCloud);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  await deleteCloudById(id);

  return ApiResponseFactory.success(null);
}
