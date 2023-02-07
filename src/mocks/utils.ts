import jwt from 'jsonwebtoken';
import { createResponseComposition, context } from 'msw';
import { db } from './db';
import omit from 'lodash/omit';
import { JWT_SECRET } from '@/config';

/**
 * A function to takes in a string and returns a hash of that string
 * @see https://github.com/alan2207/bulletproof-react/blob/master/src/test/server/utils.ts#L15-L23
 */
export const hash = (str: string) => {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return String(hash >>> 0);
}

/**
 * A custom delayedResponse composition that attaches a realistic delay time to every mocked response.
 */
export const delayedResponse = createResponseComposition(undefined, [
  context.delay(1000),
]);

// TODO: Type the user parameter.
const sanitizeUser = (user: any) => omit(user, ['password']);

export const authenticate = ({ email, password }: { email: string; password: string }) => {
  // TODO: Make it a generic function.
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    }
  });

  if (user?.password === hash(password)) {
    // The password property should be removed before sending the user object to API.
    const sanitizedUser = sanitizeUser(user);
    const encodedToken = jwt.sign(sanitizedUser, JWT_SECRET);
    return { user: sanitizeUser, jwt: encodedToken}
  }

  throw new Error('Invalid username or password');
}
