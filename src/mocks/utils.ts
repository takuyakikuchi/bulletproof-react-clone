/**
 * Utility functions for mock BE API.
 */

import { createResponseComposition, context, RestRequest } from 'msw';
import { db } from './db';
import omit from 'lodash/omit';

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
  // TODO: Move this find function to db.ts.
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
    // TODO: Fix JWT generation.
    const encodedToken = user.id
    
    return { user: sanitizedUser, jwt: encodedToken}
  }

  throw new Error('Invalid username or password');
}

export const requireAuth = (request: RestRequest) => {
  try {
    const encodedToken = request.headers.get('authorization');
    if (!encodedToken) {
      throw new Error('No authorization token provided.');
    }
    // TODO: Implement JWT verification.
    // const decodedToken = verify(encodedToken, JWT_SECRET);

    const user = db.user.findFirst({
      where: {
        id: {
          equals: encodedToken,
        }
      }
    })

    if (!user) {
      throw new Error('Unauthorized');
    }

    return sanitizeUser(user);
  } catch(error) {
    throw new Error();
  }
};

