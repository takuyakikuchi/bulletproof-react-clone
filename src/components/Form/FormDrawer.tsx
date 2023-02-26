import { Drawer, DrawerProps, Button } from '@/components/Elements';

type Props = {
  isOpen: boolean;
  close: () => void;
  form: string;
  isLoading: boolean;
  title: string;
  children: React.ReactNode;
  size?: DrawerProps['size'];
  triggerButton: React.ReactNode;
};

export const FormDrawer = ({
  isOpen,
  close,
  form,
  title,
  children,
  size = 'md',
  isLoading,
  triggerButton,
}: Props) => {
  return (
    <>
      {triggerButton}
      <Drawer
        isOpen={isOpen}
        onClose={close}
        title={title}
        size={size}
        footer={
          <>
            <Button variant="inverse" size="sm" onClick={close}>
              Cancel
            </Button>
            <Button form={form} type="submit" size="sm" isLoading={isLoading}>
              Submit
            </Button>
          </>
        }
      >
        {children}
      </Drawer>
    </>
  );
};
