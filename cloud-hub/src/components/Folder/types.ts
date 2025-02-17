import { z } from 'zod';

export const folderSchema = z.object({
  id: z.string().uuid(),
  path: z.string(),
  files: z.array(z.string()).optional(),
  subFolders: z.array(z.string()).optional(),
  size: z.number().min(0),
  numberOfFiles: z.number().min(0),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Folder = z.infer<typeof folderSchema>;
