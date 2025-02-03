export type Folder = {
  path: string;
  files: File[];
  sub_folders: Folder[];
  size: number;
  number_of_files: number;
  created: Date;
  updated: Date;
};

export type Cloud = {
  name: string;
  owner: string; // record_id
  shared_with: string[]; // record_id
  allocated_size: number;
  used_size: number;
  number_of_files: number;
  folders: Folder[];
  created: Date;
  updated: Date;
};
