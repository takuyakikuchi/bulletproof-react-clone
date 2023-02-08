import { Form, InputField } from '@/components/Form';
import { Button } from '@/components/Elements';
import { Link } from 'react-router-dom';
import { loginSchema, LoginCredentials } from '../types';
import { useLogin } from '@/lib/auth';

export const LoginForm = () => {
  const login = useLogin();

  return (
    <div>
      <Form<LoginCredentials, typeof loginSchema>
        onSubmit={(values) => {
          login.mutate(values, {
            // TODO: Redirect to the home onSuccess.
            onSuccess: () => console.log('logged in'),
          });
        }}
        schema={loginSchema}
      >
        {({ register, formState }) => (
          <>
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
            <div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-end">
        <div className="text-sm">
          <Link
            to="/auth/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
