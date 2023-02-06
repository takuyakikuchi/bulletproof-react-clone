import { namedLazyImport } from '@/utils/namedLazyImport';

const { Login } = namedLazyImport(
  () => import('@/features/auth/routes/Login'),
  'Login'
);

export const publicRoutes = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  // TODO: Add register route.
];
