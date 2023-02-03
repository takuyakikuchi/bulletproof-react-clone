import { Sidebar, Topbar } from './parts';

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Topbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
