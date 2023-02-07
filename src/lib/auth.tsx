import { configureAuth } from 'react-query-auth';

// async function registerFn(data) {
// }

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn: () => null, // () => api.get('/me'),
  loginFn: () => null, //(credentials) => api.post('/login', credentials),
  registerFn: () => null, //(credentials) => api.post('/register', credentials),
  logoutFn: () => null, //() => api.post('/logout'),
});
