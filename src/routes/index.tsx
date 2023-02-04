import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { Landing } from '@/features/misc';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Landing /> }];

  const router = createBrowserRouter([...protectedRoutes, ...commonRoutes]);

  return <RouterProvider router={router} />;
};
