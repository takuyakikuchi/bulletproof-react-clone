import { Form, InputField } from '@/components/Form';
import { Button } from '@/components/Elements';
import { Link } from 'react-router-dom';
import { registerSchema, RegisterCredentials } from '../types';
import { useRegister } from '@/lib/auth';

type Props = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: Props) => {
  const registerUser = useRegister();

  return (
    <div>
      <Form<RegisterCredentials, typeof registerSchema>
        onSubmit={(values) => {
          registerUser.mutate(values, {
            onSuccess,
          });
        }}
        schema={registerSchema}
        // TODO: Uncomment when this option is needed.
        // options={{
        //   shouldUnregister: true,
        // }}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="text"
              label="First Name"
              error={formState.errors.firstName}
              registration={register('firstName')}
            />
            <InputField
              type="text"
              label="Last Name"
              error={formState.errors.lastName}
              registration={register('lastName')}
            />
            <InputField
              type="email"
              label="Email Address"
              error={formState.errors.email}
              registration={register('email')}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors.password}
              registration={register('password')}
            />
            {/* TODO: Add team setting */}
            <div>
              {/* TODO: add `isLoading` */}
              <Button type="submit" className="w-full">
                Register
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-end">
        <div className="text-sm">
          <Link
            to="/auth/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
