import { User } from '@/components/User/types';
import { Folder } from '@/components/Folder/types';

export type Cloud = {
  id: string;
  name: string;
  owner: User;
  sharedWith?: User[];
  allocatedSize: number;
  usedSize: number;
  numberOfFiles: number;
  folders: Folder[];
  createdAt: Date;
  updatedAt: Date;
};
