import { Drawer } from './Drawer';
import { Button } from '@/components/Elements';
import type { Meta, StoryObj } from '@storybook/react';
import { useDisclosure } from '@/hooks/useDisclosure';

const DrawerSample = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <>
      <Button onClick={open}>Open Drawer</Button>
      <Drawer
        isOpen={isOpen}
        title="Sample Drawer"
        onClose={close}
        footer={
          <>
            <Button variant="inverse" onClick={close}>
              Cancel
            </Button>
            <Button onClick={close}>Save</Button>
          </>
        }
      >
        Hello
      </Drawer>
    </>
  );
};

const meta: Meta<typeof DrawerSample> = {
  title: 'Components/Elements/Drawer',
  component: DrawerSample,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const SampleDrawer: Story = {};
