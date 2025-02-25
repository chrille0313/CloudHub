'use server';
import { ZodFormattedError } from 'zod';
import { authenticateUserSchema, AuthenticateUser, SignUpUser, signUpUserSchema } from './types';
import { redirect } from 'next/navigation';
import { authenticateUser, createUser } from './service';
import { APIError } from 'better-auth/api';
import { formatAPIErrorMessage } from '@/utils';

export type SignUpUserActionState = {
  data: SignUpUser;
  errors: ZodFormattedError<SignUpUser>;
};

export async function signUpUserAction(
  prevState: SignUpUserActionState,
  formData: FormData
): Promise<SignUpUserActionState> {
  const submittedData = Object.fromEntries(formData.entries()) as SignUpUser;

  const validation = signUpUserSchema.safeParse(submittedData);

  if (!validation.success) {
    return {
      data: submittedData,
      errors: validation.error.format()
    };
  }

  const data = {
    name: validation.data.name,
    email: validation.data.email,
    username: validation.data.username,
    image: validation.data.image,
    password: validation.data.password
  };

  try {
    await createUser(data);
  } catch (error) {
    if (error instanceof APIError) {
      return {
        data: submittedData,
        errors: {
          _errors: [formatAPIErrorMessage(error.message)]
        }
      };
    }
  }

  redirect('/dashboard');
}

export type SignInUserActionState = {
  data: AuthenticateUser;
  errors: ZodFormattedError<AuthenticateUser>;
};

export async function signInUserAction(
  prevState: SignInUserActionState,
  formData: FormData
): Promise<SignInUserActionState> {
  const submittedData = Object.fromEntries(formData.entries()) as AuthenticateUser;

  const validation = authenticateUserSchema.safeParse(submittedData);

  if (!validation.success) {
    return {
      data: submittedData,
      errors: validation.error.format()
    };
  }

  try {
    await authenticateUser(validation.data);
  } catch (error) {
    if (error instanceof APIError) {
      return {
        data: submittedData,
        errors: {
          _errors: [formatAPIErrorMessage(error.message)]
        }
      };
    }
  }

  redirect('/dashboard');
}
