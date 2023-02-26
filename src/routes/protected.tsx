import { Outlet } from 'react-router-dom';
import { PageLayout } from '@/components/Layout';
import { namedLazyImport } from '@/utils/namedLazyImport';

const { Dashboard } = namedLazyImport(
  () => import('@/features/misc'),
  'Dashboard'
);
const { Profile } = namedLazyImport(() => import('@/features/user'), 'Profile');

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
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
];
