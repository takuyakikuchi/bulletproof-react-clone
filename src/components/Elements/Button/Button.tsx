import clsx from 'clsx';
import { Spinner } from '@/components/Elements/Spinner';

const variants = {
  primary: 'bg-blue-600 text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-1 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { startIcon?: never; endIcon: React.ReactElement }
  | { startIcon?: undefined; endIcon?: undefined };

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = ({
  // Specific attributes to this button components.
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
  startIcon,
  endIcon,
  // Common button attributes are received as rest parameters.
  ...props
}: Props) => {
  return (
    <button
      // TODO: Uncomment when understood why ref is used here.
      // ref={ref}
      type={type}
      className={clsx(
        'flex justify-center items-center border border-gray-300 rounded-md shadow-sm font-medium',
        'disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none hover:opacity-80',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="text-current" />}
      {!isLoading && startIcon}
      <span className="mx-2">{props.children}</span>
      {!isLoading && endIcon}
    </button>
  );
};
