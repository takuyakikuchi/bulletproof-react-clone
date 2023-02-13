import { Drawer, Button } from '@/components/Elements';

const Footer = (
  <>
    <Button variant="inverse" size="sm" onClick={() => null}>
      Cancel
    </Button>
    <Button form="update-profile" type="submit" size="sm" isLoading={false}>
      Submit
    </Button>
  </>
);

export const FormDrawer = () => {
  return (
    <Drawer
      isOpen={true}
      onClose={() => null}
      title={'Update Profile'}
      size={'md'}
      footer={Footer}
    >
      Children
    </Drawer>
  );
};
