import '@testing-library/jest-dom';
import { Drawer, Button } from '@/components/Elements';
import { useDisclosure } from '@/hooks/useDisclosure';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Mock the IntersectionObserver API
 * @see https://vitest.dev/guide/mocking.html#globals
 * ? This mock should be moved to a global setup file?
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

describe('Drawer', () => {
  it('should not render Drawer at first', () => {
    // Arrange
    render(<TestDrawer />);    

    // Assert
    expect(screen.queryByText('Test Drawer')).not.toBeInTheDocument();
  });

  it('should render Drawer after clicking on the open button', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestDrawer />);

    // Act
    await user.click(screen.getByRole('button', { name: /open drawer/i }));

    // Assert
    expect(screen.queryByText('Test Drawer')).toBeInTheDocument();
  });

  it('should close the drawer after clicking on the cancel button', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestDrawer />);
    await user.click(screen.getByRole('button', { name: /open drawer/i }));

    // Act
    await user.click(screen.getByRole('button', { name: /cancel/i }));

    // Assert
    expect(screen.queryByText('Test Drawer')).not.toBeInTheDocument();
  });
});

