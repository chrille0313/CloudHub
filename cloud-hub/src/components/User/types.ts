export type User = {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
};
