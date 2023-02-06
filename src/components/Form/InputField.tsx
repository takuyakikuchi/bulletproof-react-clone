import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from '@/components/Form';

type Props = {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: UseFormRegisterReturn;
} & FieldWrapperPassThroughProps;

export const InputField = ({
  type = 'text',
  className = '',
  label,
  error,
  registration,
}: Props) => {
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        className={clsx(
          // appearance-none to reset any browser specific styling on an element.
          'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400',
          'focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
