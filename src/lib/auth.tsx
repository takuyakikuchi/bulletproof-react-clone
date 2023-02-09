/**
 * A file to manage user authentication with react-query-auth.
 * Export hooks to retrieve the authenticated user, login, register, and logout.
 * @see https://github.com/alan2207/react-query-auth
 */

import { configureAuth } from 'react-query-auth';
import {
  RegisterCredentials,
  LoginCredentials,
  UserResponse,
  AuthUser,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  getUser,
} from '@/features/auth';
import { storage } from '@/utils/storage';

/**
 * A function to extract the JWT and user from the API response data,
 * store the JWT in the storage, and return the user data.
 */
function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;

  storage.setToken(jwt);

  return user;
}

async function userFn() {
  if (storage.getToken()) {
    const response = await getUser();
    return response.data;
  }
  return null;
}

async function loginFn(data: LoginCredentials) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response.data);
  return user;
}

async function registerFn(data: RegisterCredentials) {
  // Make a post request to the mock API.
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response.data);
  return user;
}

async function logoutFn() {
  // storage.clearToken();
  // window.location.assign(window.location.origin as unknown as string);
}

export const { useUser, useLogin, useRegister, useLogout } = configureAuth<
  AuthUser,
  unknown,
  LoginCredentials,
  RegisterCredentials
>({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
  // TODO: LoaderComponent
});
