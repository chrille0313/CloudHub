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

export const createCloudSchema = z.object({
  name: z.string(),
  owner: userSchema,
  allocatedSize: z.number()
});

export type Cloud = z.infer<typeof cloudSchema>;
