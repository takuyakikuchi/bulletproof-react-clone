import { Outlet } from 'react-router-dom';
import { PageLayout } from '../components/Layout/PageLayout/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    // TODO: Add error boundary
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <div>Dashboard</div>,
      },
      {
        path: 'discussions',
        element: <div>Discussions</div>,
      },
      {
        path: 'users',
        element: <div>Users</div>,
      },
    ],
  },
];
