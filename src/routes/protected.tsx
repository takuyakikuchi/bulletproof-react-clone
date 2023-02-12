import { Outlet } from 'react-router-dom';
import { PageLayout } from '@/components/Layout';
import { Dashboard } from '@/features/misc';

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
        element: <Dashboard />,
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
