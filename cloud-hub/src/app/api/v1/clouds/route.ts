import InMemoryDB from '@/../db/in_memory';
import { NextRequest } from 'next/server';
import { Cloud, createCloudSchema } from '@/components/Cloud/types';
import { getAllClouds, createCloud } from '@/components/Cloud/service';
import { ApiResponse, ApiResponseFactory } from './types';

export async function GET(): Promise<ApiResponse<Cloud[]>> {
  const clouds = await getAllClouds();
  return ApiResponseFactory.success(clouds);
}

export async function POST(request: NextRequest): Promise<ApiResponse<Cloud>> {
  const data = (await request.json()) as Pick<Cloud, 'name' | 'allocatedSize' | 'owner'>;
  data.owner = InMemoryDB.authenticatedUser;

  const validation = createCloudSchema.safeParse(data);

  if (!validation.success) {
    return ApiResponseFactory.error(validation.error.message, 400);
  }

  const newCloud = await createCloud(validation.data);

  return ApiResponseFactory.success(newCloud, 201);
}
