import { namedLazyImport } from '@/utils/namedLazyImport';

const { Login } = namedLazyImport(
  () => import('@/features/auth/routes/Login'),
  'Login'
);
const { Register } = namedLazyImport(
  () => import('@/features/auth/routes/Register'),
  'Register'
);

export const publicRoutes = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/register',
    element: <Register />,
  },
];
