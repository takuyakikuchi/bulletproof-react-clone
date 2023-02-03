import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { HomeIcon, FolderIcon, UsersIcon } from '@heroicons/react/24/outline';

export const SideNavigation = () => {
  const navigation = [
    { name: 'Dashboard', to: '.', icon: HomeIcon },
    { name: 'Discussions', to: './discussions', icon: FolderIcon },
    // TODO: Authentication: admin users only
    { name: 'Users', to: './users', icon: UsersIcon },
  ];

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink
          end={index === 0}
          key={item.name}
          to={item.to}
          className={({ isActive }) =>
            clsx(
              'text-gray-300 hover:bg-gray-700 hover:text-white',
              'group flex items-center px-2 py-2 text-base font-medium rounded-md',
              isActive && 'bg-gray-900 text-white'
            )
          }
        >
          <item.icon
            className={clsx(
              'text-gray-400 group-hover:text-gray-300',
              'mr-4 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
