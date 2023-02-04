import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { Landing } from '@/features/misc';

export const AppRoutes = () => {
  // TODO: Replace when authentication logic is ready.
  const auth = false;
  const commonRoutes = [{ path: '/', element: <Landing /> }];
  const routes = auth ? protectedRoutes : publicRoutes;
  const router = createBrowserRouter([...routes, ...commonRoutes]);

  return <RouterProvider router={router} />;
};
