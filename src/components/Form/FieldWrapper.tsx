import clsx from 'clsx';
import { FieldError } from 'react-hook-form';

type Props = {
  label?: string;
  error?: FieldError;
  className?: string;
  children: React.ReactNode;
};

export type FieldWrapperPassThroughProps = Omit<
  Props,
  'className' | 'children'
>;

export const FieldWrapper = ({
  label = '',
  error,
  className = '',
  children,
}: Props) => {
  return (
    <div>
      <label
        className={clsx('block text-sm font-medium text-gray-700', className)}
        htmlFor={label}
      >
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm font-semibold text-red-500"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
