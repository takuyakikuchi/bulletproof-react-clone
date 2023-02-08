import { z } from 'zod';

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
  // bio: string;
  // role: 'ADMIN' | 'USER';
};

export type UserResponse = {
  jwt: string;
  user: AuthUser;
};
