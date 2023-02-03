import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello world!</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};
