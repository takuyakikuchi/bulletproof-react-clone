import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { protectedRoutes } from './protected';

export const AppRoutes = () => {
  const router = createBrowserRouter([...protectedRoutes]);

  return <RouterProvider router={router} />;
};
