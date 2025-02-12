import { Cloud, User } from '@/types';

export const testUser: User = {
  id: '3622c012-a12e-4c52-9863-4771fb2dbe5a',
  username: 'testUser',
  email: 'test@user1.com',
  verified: true,
  createdAt: new Date(2020, 1, 1),
  updatedAt: new Date(2024, 2, 2)
};

export const clouds: Cloud[] = [
  {
    id: '1236f7af-c665-4cec-8d25-ea56e2cb3714',
    name: 'testCloud1',
    owner: testUser,
    allocatedSize: 1000000,
    usedSize: 500000,
    numberOfFiles: 5,
    folders: [],
    createdAt: new Date(2021, 3, 3),
    updatedAt: new Date(2021, 4, 4)
  },
  {
    id: '2236f7af-c665-4cec-8d25-ea56e2cb3714',
    name: 'testCloud2',
    owner: testUser,
    allocatedSize: 1000000,
    usedSize: 500000,
    numberOfFiles: 5,
    folders: [],
    createdAt: new Date(2022, 5, 5),
    updatedAt: new Date(2022, 6, 6)
  },
  {
    id: '3236f7af-c665-4cec-8d25-ea56e2cb3714',
    name: 'testCloud3',
    owner: testUser,
    allocatedSize: 1000000,
    usedSize: 500000,
    numberOfFiles: 5,
    folders: [],
    createdAt: new Date(2023, 7, 7),
    updatedAt: new Date(2023, 8, 8)
  }
];
