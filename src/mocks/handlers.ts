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

type LoginBody = {
  email: string;
  password: string;
};

/**
 * To handle a REST API request and return the mocked response.
 * @see https://mswjs.io/docs/getting-started/mocks/rest-api#request-handler
 */
export const handlers = [
  // TODO: Take this out to an individual file when another handler is added.
  // MSW handles a REST API post request to /auth/register.
  rest.post<RegisterBody>(`${API_URL}/auth/register`, async (req, res, ctx) => {
    try {
      const userObject = await req.json();

      // TODO: Move this find function to db.ts.
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

      // Creating an user entity with @mswjs/data.
      db.user.create({
        ...userObject,
        id: nanoid(),
        createdAt: Date.now(),
        password: hash(userObject.password),
        // teamId,
        // role,
      })

      // Persist the database to local storage.
      await persistDb('user');

      const result = await authenticate({email: userObject.email, password: userObject.password});
      
      return delayedResponse(ctx.json(result));
    } catch (error: unknown) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error || 'Server Error' })
      );
    }
  }),
  rest.post<LoginBody>(`${API_URL}/auth/login`, async(req, res, ctx) => {
    try {
      const userObject = await req.json();
      const result = authenticate(userObject);
      return delayedResponse(ctx.json(result));
    } catch (error: unknown) {
      return delayedResponse(
        ctx.status(400),
        ctx.json({ message: error || 'Server Error' })
      );
    }
  }),
]
