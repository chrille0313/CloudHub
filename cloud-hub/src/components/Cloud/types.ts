import { z } from 'zod';
import { userSchema } from '@/components/User/types';
import { folderSchema } from '@/components/Folder/types';

export const cloudSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  owner: userSchema,
  sharedWith: z.array(userSchema).optional(),
  allocatedSize: z.number(),
  usedSize: z.number(),
  numberOfFiles: z.number(),
  folders: z.array(folderSchema).optional(),
  files: z.array(z.string()).optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Cloud = z.infer<typeof cloudSchema>;

export const createCloudSchema = z.object({
  name: z.string().nonempty().max(255),
  allocatedSize: z.coerce.number().int().min(1)
});

export type CreateCloud = z.infer<typeof createCloudSchema>;

export const updateCloudSchema = z.object({
  name: z.string().optional(),
  allocatedSize: z.number().optional()
});

export type UpdateCloud = z.infer<typeof updateCloudSchema>;
