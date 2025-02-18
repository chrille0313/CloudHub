import { getAllClouds, createCloud } from '@/components/Cloud/service';
import { Cloud, cloudSchema } from '@/components/Cloud/types';
import { User } from '@/components/User/types';
import { CloudOff, CloudSyncOutlined } from '@mui/icons-material';
import mockInMemoryDB from '@/../db/__mocks__/in_memory';
import exp from 'constants';

/*
 *  Unit Tests
 */

const testUser: User = {
  id: '1',
  username: 'testUser',
  email: 'test@test.test',
  verified: true,
  createdAt: new Date(),
  updatedAt: new Date()
};

const testCloud: Cloud = {
  id: '0',
  usedSize: 0,
  numberOfFiles: 0,
  createdAt: new Date(),
  updatedAt: new Date(),
  owner: testUser,
  name: 'test',
  allocatedSize: 5
};


jest.mock('@/../db/__mocks__/in_memory')
  /*return {
    
    default: {
      clouds: [] as Cloud[],
      authenticatedUser: {
        id: '3622c012-a12e-4c52-9863-4771fb2dbe5a',
        username: 'testUser',
        email: 'test@user1.com',
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  
    },
  };*/
//createCloud()
describe('create cloud', () => {

  const cloudAttributes = {
    name: 'test',
    owner: testUser,
    allocatedSize: 5
  };

  test('should create cloud and match attributes', async () => {
  
    const cloud1 = await createCloud(cloudAttributes);
    expect(cloud1.id).toBeDefined();
    expect(cloud1.usedSize).toBe(0);
    expect(cloud1.numberOfFiles).toBe(0);
    expect(cloud1.createdAt).toBeDefined;
    expect(cloud1.updatedAt).toBeDefined;
    expect(cloud1.owner).toBe(cloudAttributes.owner);
    expect(cloud1.name).toBe(cloudAttributes.name);
    expect(cloud1.allocatedSize).toBe(cloudAttributes.allocatedSize);

    //expect(mockInMemoryDB).toHaveBeenCalledTimes(1);
    
    //expect(inMemoryDB.mock.calls).toHaveLength(1)
    //expect(inMemoryDB.clouds).toHaveLength(1);
    //expect(inMemoryDB.clouds[0]).toBe(cloud1);
  });

  test('should generate unique id for each cloud', async () => {
    const cloud1 = await createCloud(cloudAttributes);
    const cloud2 = await createCloud(cloudAttributes);
    expect(cloud1.id).not.toBe(cloud2.id);
  });
});





//getAllClouds()


//getSharedClouds()
//getCloudById()
//updateCloudById()
//deleteCloudById()
