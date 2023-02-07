import { Spinner } from '@/components/Elements';
import { Suspense } from 'react';
import { queryClient } from '@/lib/query';
import { QueryClientProvider } from 'react-query';

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      {/* TODO: Error boundary */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Suspense>
  );
};
