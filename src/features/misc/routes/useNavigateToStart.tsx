import { useNavigate } from 'react-router-dom';

/**
 * A hook to navigate to the start page.
 * @returns {() => void} A function that navigates to the start page.(Login or Landing)
 */
export const useNavigateToStart = () => {
  const navigate = useNavigate();

  const navigateToStart = () => {
    // TODO: Only authenticated user is navigated to the app.
    navigate('/app');
  };

  return navigateToStart;
};
