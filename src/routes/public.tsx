import { Login } from '@/features/auth/routes';

export const publicRoutes = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  // TODO: Add register route.
];
