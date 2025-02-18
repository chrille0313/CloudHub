import { Cloud } from '@/components/Cloud/types';
import { User } from '@/components/User/types';

export class MockInMemoryDB {
  public authenticatedUser: User = {
    id: '3622c012-a12e-4c52-9863-4771fb2dbe5a',
    username: 'testUser',
    email: 'test@user1.com',
    verified: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  public clouds: Cloud[] = [];
}

const mockInMemoryDB = new MockInMemoryDB();

export default mockInMemoryDB;