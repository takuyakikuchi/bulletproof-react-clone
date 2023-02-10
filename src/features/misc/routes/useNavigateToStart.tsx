import { useNavigate } from 'react-router-dom';
import { useUser } from '@/lib/auth';

/**
 * A hook to navigate to the start page depending on the user's authentication status.
 */
export const useNavigateToStart = () => {
  const navigate = useNavigate();
  const user = useUser().data;

  const navigateToStart = () => {
    if (user) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };

  return navigateToStart;
};
