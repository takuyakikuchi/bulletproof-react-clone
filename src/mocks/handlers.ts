import { rest } from 'msw';
import { API_URL } from '@/config';
import { db, persistDb } from './db';
import { nanoid } from 'nanoid';
import { hash, delayedResponse, authenticate } from './utils';

type RegisterBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  // teamId?: string;
  // teamName?: string;
}

export const handlers = [
  rest.post<RegisterBody>(`${API_URL}/auth/register`, async (req, res, ctx) => {
    try {
      const userObject = await req.json();

      const existingUser = db.user.findFirst({
        where: {
          email: {
            equals: userObject.email,
          },
        },
      });

      if (existingUser) {
        throw new Error('User already exists');
      }

      // Creates an user entity with @mswjs/data
      db.user.create({
        ...userObject,
        id: nanoid(),
        createdAt: Date.now(),
        password: hash(userObject.password),
        // teamId,
        // role,
      })

      persistDb('user');

      const result = authenticate({email: userObject.email, password: userObject.password});

      return delayedResponse(ctx.json(result));
    } catch (error) {
      // return delayedResponse(ctx.status(400), ctx.json({message: error.message || 'Server Error'}));
    }

    return res(
      ctx.status(200),
    )
  }),
]
