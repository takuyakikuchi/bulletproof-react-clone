import { Layout, LoginForm } from '@/features/auth/components';

export const Login = () => {
  return (
    <Layout title="Log in to your account">
      {/* TODO: Add onSuccess */}
      <LoginForm />
    </Layout>
  );
};
