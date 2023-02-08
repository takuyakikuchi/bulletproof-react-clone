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

// async function registerFn(data: RegisterCredentials) {
//   const response = await registerWithEmailAndPassword(data);
//   const user = await handleUserResponse(response);
//   return user;
// }

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn: () => null, // () => api.get('/me'),
  loginFn: () => null, //(credentials) => api.post('/login', credentials),
  registerFn: () => null,
  logoutFn: () => null, //() => api.post('/logout'),
});
