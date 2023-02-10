import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

type UserNavigationItem = {
  name: string;
  to: string;
  onClick?: () => void;
};

export const UserNavigation = () => {
  const userNavigation: UserNavigationItem[] = [
    // TODO: Uncomment when profile page is ready.
    // { name: 'Your Profile', to: './profile' },
    { name: 'Sign out', to: '', onClick: () => null },
  ];

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button
          className={clsx(
            'max-w-xs  bg-gray-200 p-2 flex items-center text-sm rounded-full',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          )}
        >
          {/* `sr-only` to hide an element visually without hiding it from screen readers */}
          <span className="sr-only">Open user menu</span>
          <UserIcon className="h-8 w-8 rounded-full" />
        </Menu.Button>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1',
            'ring-black ring-opacity-5 focus:outline-none'
          )}
        >
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  onClick={item.onClick}
                  to={item.to}
                  className={clsx(
                    'block px-4 py-2 text-sm text-gray-700',
                    active && 'bg-gray-100'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
