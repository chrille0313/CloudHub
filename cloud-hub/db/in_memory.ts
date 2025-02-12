import { Cloud } from '@/components/Cloud/types';
import { User } from '@/components/User/types';

export class InMemoryDB {
  public authenticatedUser: User = {
    id: '3622c012-a12e-4c52-9863-4771fb2dbe5a',
    username: 'testUser',
    email: 'test@user1.com',
    verified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  public clouds: Cloud[] = [];
}

const inMemoryDB = new InMemoryDB();

export default inMemoryDB;
