import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  email: z.string().email(),
  verified: z.boolean(),
  image: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type User = z.infer<typeof userSchema>;

export const signUpUserSchema = z
  .object({
    name: z.string().nonempty().max(255),
    username: z.string().nonempty().max(255),
    email: z.string().email(),
    image: z.string().optional(),
    password: z.string().nonempty().max(255),
    confirmPassword: z.string().nonempty().max(255)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });

export type SignUpUser = z.infer<typeof signUpUserSchema>;

export const createUserSchema = z.object({
  name: z.string().nonempty().max(255),
  username: z.string().nonempty().max(255),
  email: z.string().email(),
  image: z.string().optional(),
  password: z.string().nonempty().max(255)
});

export type CreateUser = z.infer<typeof createUserSchema>;

export const authenticateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().nonempty().max(255)
});

export type AuthenticateUser = z.infer<typeof authenticateUserSchema>;
