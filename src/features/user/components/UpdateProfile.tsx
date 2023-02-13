import { z } from 'zod';
import { Button } from '@/components/Elements';
import { PencilIcon } from '@heroicons/react/20/solid';
import { Form, FormDrawer, InputField, TextAreaField } from '@/components/Form';
import { useDisclosure } from '@/hooks/useDisclosure';

const schema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  bio: z.string().optional(),
});
type Schema = z.infer<typeof schema>;

export const UpdateProfile = () => {
  const { isOpen, open, close } = useDisclosure();

  return (
    <FormDrawer
      isOpen={isOpen}
      close={close}
      form="update-profile"
      title="Update Profile"
      isLoading={false}
      triggerButton={
        <Button
          startIcon={<PencilIcon className="h-4 w-4" />}
          size="sm"
          onClick={open}
        >
          Update Profile
        </Button>
      }
    >
      <Form<Schema, typeof schema>
        schema={schema}
        id="update-profile"
        onSubmit={() => null}
        options={{
          defaultValues: {
            firstName: 'Takuya',
            lastName: 'Kikuchi',
            email: 'test@gmail.com',
            bio: '',
          },
        }}
      >
        {({ register, formState }) => (
          <>
            <InputField
              label="First Name"
              error={formState.errors.firstName}
              registration={register('firstName')}
            />
            <InputField
              label="Last Name"
              error={formState.errors.lastName}
              registration={register('lastName')}
            />
            <InputField
              label="Email Address"
              error={formState.errors.email}
              registration={register('email')}
            />
            <TextAreaField
              label="Bio"
              error={formState.errors.bio}
              registration={register('bio')}
            />
          </>
        )}
      </Form>
    </FormDrawer>
  );
};
