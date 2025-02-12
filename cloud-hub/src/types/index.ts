export type User = {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Folder = {
  id: string;
  path: string;
  files?: File[];
  subFolders?: Folder[];
  size: number;
  numberOfFiles: number;
  createdAt: Date;
  updatedAt: Date;
};

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
