import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginCredentials = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string(),
  lastName: z.string(),
  // teamId: z.string().optional(),
  // teamName: z.string().optional(),
});

export type RegisterCredentials = z.infer<typeof registerSchema>;

export type AuthUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'USER';
  bio: string;
};

export type UserResponse = {
  jwt: string;
  user: AuthUser;
};
