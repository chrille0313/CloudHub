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
