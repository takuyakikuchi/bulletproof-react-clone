import { Spinner } from '@/components/Elements';
import { Suspense } from 'react';

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
      {children}
    </Suspense>
  );
};
