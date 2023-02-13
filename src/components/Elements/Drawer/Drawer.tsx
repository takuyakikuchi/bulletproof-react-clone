import clsx from 'clsx';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const SIZES = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
} as const;

export const Drawer = () => {
  return (
    // TODO: pass isOpen to show
    <Transition
      show={true}
      as={Fragment}
      enter="transform transition ease-in-out duration-300 sm:duration-300"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-300 sm:duration-300"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <Dialog
        className="fixed inset-0 overflow-hidden z-40"
        open={true}
        // TODO: Replace with a function
        onClose={() => null}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            {/* TODO: size dynamic */}
            <div className={clsx('w-screen', SIZES['md'])}>
              <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        {/* TODO: Take title from prop */}
                        Update Profile
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          onClick={() => null}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    Children
                  </div>
                </div>
                <div className="flex-shrink-0 px-4 py-4 flex justify-end space-x-2">
                  Footer
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
