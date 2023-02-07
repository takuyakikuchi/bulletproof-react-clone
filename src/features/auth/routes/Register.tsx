import { Layout, RegisterForm } from '@/features/auth/components';

export const Register = () => {
  return (
    <Layout title="Register your account">
      {/* TODO: Add onSuccess */}
      <RegisterForm />
    </Layout>
  );
};
