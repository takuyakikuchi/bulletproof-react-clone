import { Layout, LoginForm } from '@/features/auth/components';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout title="Log in to your account">
      <LoginForm onSuccess={() => navigate('/app')} />
    </Layout>
  );
};
