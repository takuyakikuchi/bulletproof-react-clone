import { Spinner } from '@/components/Elements';
import { Suspense } from 'react';
import { queryClient } from '@/lib/query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthLoader } from '@/lib/auth';

type Props = {
  children: React.ReactNode;
};

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Spinner size="xl" />
    </div>
  );
};

export const AppProvider = ({ children }: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      {/* TODO: Error boundary */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthLoader renderLoading={() => <Loading />}>{children}</AuthLoader>
      </QueryClientProvider>
    </Suspense>
  );
};
