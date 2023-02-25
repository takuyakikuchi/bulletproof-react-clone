import '@testing-library/jest-dom';
import { Drawer, Button } from '@/components/Elements';
import { useDisclosure } from '@/hooks/useDisclosure';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Mock the IntersectionObserver API
 * @see https://vitest.dev/guide/mocking.html#globals
 */
const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

const TestDrawer = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <>
      <Button onClick={open}>Open Drawer</Button>
      <Drawer
        isOpen={isOpen}
        title='Test Drawer'
        onClose={close}
        footer={
          <>
            <Button variant='inverse' size='sm' onClick={close}>Cancel</Button>
            <Button size='sm'>Submit</Button>
          </>
        }
        >
        Hello from drawer
      </Drawer>
    </>
  );
}

test('Drawer should handle open and close user actions', async () => {
  const user = userEvent.setup();
  render(<TestDrawer />);

  // By default, the drawer should be closed
  expect(screen.queryByText('Test Drawer')).not.toBeInTheDocument();

  // After clicking on the open button, the drawer should be open.
  await user.click(screen.getByRole('button', { name: /open drawer/i }));
  expect(screen.queryByText('Test Drawer')).toBeInTheDocument();

  // After clicking on the cancel button, the drawer should be open.
  await user.click(screen.getByRole('button', { name: /cancel/i }));
  expect(screen.queryByText('Test Drawer')).not.toBeInTheDocument();
});

