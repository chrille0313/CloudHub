'server-only';

import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma';
import { nextCookies } from 'better-auth/next-js';
import { username } from 'better-auth/plugins';

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  account: {
    accountLinking: {
      enabled: true
    }
  },
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }
  },
  plugins: [username(), nextCookies()]
});

// Note: nextCookies() must be the last plugin in the plugins list
