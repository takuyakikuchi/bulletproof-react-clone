import clsx from 'clsx';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = FieldWrapperPassThroughProps & {
  className?: string;
  registration: UseFormRegisterReturn;
};

export const TextAreaField = ({
  label,
  className = '',
  error,
  registration,
}: Props) => {
  return (
    <FieldWrapper label={label} error={error}>
      <textarea
        className={clsx(
          // `appearance-none` to reset any browser specific styling on an element
          'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400',
          'focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
