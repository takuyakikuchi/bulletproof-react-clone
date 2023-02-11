import { Layout, RegisterForm } from '@/features/auth/components';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <Layout title="Register your account">
      <RegisterForm onSuccess={() => navigate('/app')} />
    </Layout>
  );
};
