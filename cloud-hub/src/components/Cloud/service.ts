import InMemoryDB from '@/../db/in_memory';
import { Cloud } from './types';

export async function getAllClouds(): Promise<Cloud[]> {
  return InMemoryDB.clouds.filter((cloud) => cloud.owner.id === InMemoryDB.authenticatedUser.id);
}

export async function getSharedClouds(): Promise<Cloud[]> {
  return InMemoryDB.clouds.filter((cloud) =>
    cloud.sharedWith?.includes(InMemoryDB.authenticatedUser)
  );
}

export async function getCloudById(id: string): Promise<Cloud | undefined> {
  return InMemoryDB.clouds.find(
    (cloud) =>
      cloud.id === id &&
      (cloud.owner.id === InMemoryDB.authenticatedUser.id ||
        cloud.sharedWith?.includes(InMemoryDB.authenticatedUser))
  );
}

export async function createCloud(
  attributes: Pick<Cloud, 'name' | 'owner' | 'allocatedSize'>
): Promise<Cloud> {
  const cloud: Cloud = {
    id: (Math.random() * 1e5).toString(),
    usedSize: 0,
    numberOfFiles: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...attributes
  };

  InMemoryDB.clouds.push(cloud);

  return cloud;
}

export async function updateCloudById(id: string, fields: Partial<Cloud>): Promise<Cloud> {
  const cloud = await getCloudById(id);

  if (!cloud) {
    throw new Error();
  }

  Object.assign(cloud, fields, { updatedAt: new Date() });

  return cloud;
}

export async function deleteCloudById(id: string) {
  const cloudIndex = InMemoryDB.clouds.findIndex(
    (cloud) => cloud.id === id && cloud.owner.id === InMemoryDB.authenticatedUser.id
  );

  if (cloudIndex === -1) {
    throw new Error();
  }

  InMemoryDB.clouds.splice(cloudIndex, 1);
}
