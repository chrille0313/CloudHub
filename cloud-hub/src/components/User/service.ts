'server-only';

import { auth } from '@/lib/auth';
import { AuthenticateUser, CreateUser } from './types';

export async function createUser(user: CreateUser) {
  await auth.api.signUpEmail({
    body: {
      ...user
    }
  });
}

export async function authenticateUser(user: AuthenticateUser) {
  await auth.api.signInEmail({
    body: {
      ...user
    }
  });
}
