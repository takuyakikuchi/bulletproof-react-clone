import { Sidebar } from './parts/Sidebar';

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
