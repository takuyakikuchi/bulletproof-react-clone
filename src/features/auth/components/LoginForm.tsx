import { Form, InputField } from '@/components/Form';
import { z } from 'zod';
import { Button } from '@/components/Elements';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const LoginForm = () => {
  return (
    <div>
      <Form<typeof loginSchema>
        // TODO: Console log the form state.
        // TODO: onSuccess
        onSubmit={() => {
          console.log('Submitted!');
        }}
        schema={loginSchema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              // TODO: Error handling
              // error={formState.errors['email']}
              registration={register('email')}
            />
            <InputField
              type="password"
              label="Password"
              // error={formState.errors['email']}
              registration={register('password')}
            />
            <div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </>
        )}
      </Form>
      {/* TODO: Register link here */}
    </div>
  );
};
