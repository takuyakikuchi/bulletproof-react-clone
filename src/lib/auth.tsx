import { configureAuth } from 'react-query-auth';
import {
  RegisterCredentials,
  UserResponse,
  registerWithEmailAndPassword,
} from '@/features/auth';
import { storage } from '@/utils/storage';

function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function userFn() {
  // if (storage.getToken()) {
  // const data = await getUser();
  // return data;
  // }
  // return null;
}

async function loginFn() {
  // const response = await loginWithEmailAndPassword(data);
  // const user = await handleUserResponse(response);
  // return user;
}

async function registerFn(data: RegisterCredentials) {
  // Make a post request to the mock API.
  const response = await registerWithEmailAndPassword(data);
  handleUserResponse(response.data);
}

async function logoutFn() {
  // storage.clearToken();
  // window.location.assign(window.location.origin as unknown as string);
}

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn,
  loginFn,
  registerFn,
  logoutFn,
});
