import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const SideNavigation = () => {
  const navigation = [
    { name: 'Dashboard', to: '.' },
    { name: 'Discussions', to: './discussions' },
    // TODO: Authentication: admin users only
    { name: 'Users', to: './users' },
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
          {item.name}
        </NavLink>
      ))}
    </>
  );
};
