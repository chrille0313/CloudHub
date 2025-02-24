'use server';

import { redirect } from 'next/navigation';
import { createCloud, deleteCloudById } from './service';
import { CreateCloud, createCloudSchema } from './types';
import inMemoryDB from '../../../db/in_memory';
import { revalidatePath } from 'next/cache';
import { ZodFormattedError } from 'zod';

export type CreateCloudActionState = {
  data: Partial<CreateCloud>;
  errors: ZodFormattedError<CreateCloud>;
};

export async function createCloudAction(
  prevState: CreateCloudActionState,
  formData: FormData
): Promise<CreateCloudActionState> {
  const submittedData = Object.fromEntries(formData.entries()) as Partial<CreateCloud>;

  const validation = createCloudSchema.safeParse(submittedData);

  if (!validation.success) {
    return {
      data: submittedData,
      errors: validation.error.format()
    };
  }

  const data = {
    ...validation.data,
    owner: inMemoryDB.authenticatedUser
  };

  const cloud = await createCloud(data);
  revalidatePath('/clouds');
  redirect(`/clouds/${cloud.id}`);
}

export async function deleteCloudAction(id: string) {
  await deleteCloudById(id);
  revalidatePath('/clouds');
  redirect('/clouds');
}
