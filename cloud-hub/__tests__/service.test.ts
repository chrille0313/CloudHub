import { createCloud } from '@/components/Cloud/service';
import { Cloud } from '@/components/Cloud/types';
import { User } from '@/components/User/types';
import InMemoryDB from '../db/in_memory';


// ~~~~~~~~~~~~~~~~~~~~ //
// ~    Constants     ~ //
// ~~~~~~~~~~~~~~~~~~~~ //

const testUser: User = {
  id: '10',
  username: 'testUser',
  email: 'test@user.se',
  verified: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

const testCloud: Cloud = {
  id: '5',
  usedSize: 0,
  numberOfFiles: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  owner: testUser,
  name: 'testCloud',
  allocatedSize: 5
};

// ~~~~~~~~~~~~~~~~~~~~ //
// ~    Unit Tests    ~ //
// ~~~~~~~~~~~~~~~~~~~~ //


/**
 * ... for createCloud()
 */

describe('Unit tests for createCloud()', () => {

  const cloudArgument = {
    name: 'testCloud',
    owner: testUser,
    allocatedSize: 5
  };

  test('Cloud attributes should match given arguments', async() => {
  
    jest.spyOn(InMemoryDB, 'pushCloud').mockImplementation();
    const createdCloud = await createCloud(cloudArgument);
    
    expect(createdCloud.name).toEqual(cloudArgument.name);
    expect(createdCloud.owner).toBe(cloudArgument.owner);
    expect(createdCloud.allocatedSize).toEqual(cloudArgument.allocatedSize);
  });

  test('Cloud attributes should be generated correctly', async() => {

  })

  /* test('should generate unique id for each cloud', async () => {
    const cloud1 = await createCloud(cloudAttributes);
    const cloud2 = await createCloud(cloudAttributes);
    expect(cloud1.id).not.toBe(cloud2.id);
  }); */
});

/*
    expect(cloud1.id).toBeDefined();
    expect(cloud1.usedSize).toBe(0);
    expect(cloud1.numberOfFiles).toBe(0);
    expect(cloud1.createdAt).toBeDefined;
    expect(cloud1.updatedAt).toBeDefined;
    expect(cloud1.owner).toBe(cloudAttributes.owner);
    expect(cloud1.name).toBe(cloudAttributes.name);
    expect(cloud1.allocatedSize).toBe(cloudAttributes.allocatedSize); */

    //expect(mockInMemoryDB).toHaveBeenCalledTimes(1);
    
    //expect(inMemoryDB.mock.calls).toHaveLength(1)
    //expect(inMemoryDB.clouds).toHaveLength(1);
    //expect(inMemoryDB.clouds[0]).toBe(cloud1);


//getAllClouds()
//getSharedClouds()
//getCloudById()
//updateCloudById()
//deleteCloudById()
