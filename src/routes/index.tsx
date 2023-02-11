import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Landing } from '@/features/misc';
import { useUser } from '@/lib/auth';

export const AppRoutes = () => {
  const { data: authenticatedUser } = useUser();

  const commonRoutes = [{ path: '/', element: <Landing /> }];
  const routes = authenticatedUser ? protectedRoutes : publicRoutes;
  const router = createBrowserRouter([...routes, ...commonRoutes]);

  return <RouterProvider router={router} />;
};
