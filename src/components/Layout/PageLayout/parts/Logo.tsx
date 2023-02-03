import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link className="flex items-center text-white" to=".">
      <span className="text-lg text-white font-semibold">
        Bulletproof React Clone
      </span>
    </Link>
  );
};
