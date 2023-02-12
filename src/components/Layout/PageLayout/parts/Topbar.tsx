import { UserNavigation } from './UserNavigation';

export const Topbar = () => {
  return (
    <div className="flex-shrink-0 h-16 bg-white shadow">
      <div className="flex-1 px-4 flex justify-end h-full">
        {/* Without this z-10 the dropdown menu goes under the main contents */}
        <div className="ml-4 flex items-center md:ml-6 z-10">
          <UserNavigation />
        </div>
      </div>
    </div>
  );
};
