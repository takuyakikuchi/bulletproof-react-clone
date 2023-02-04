import clsx from 'clsx';

type Props = {
  label?: string;
  className?: string;
  children: React.ReactNode;
};

export type FieldWrapperPassThroughProps = Omit<
  Props,
  'className' | 'children'
>;

export const FieldWrapper = ({
  label = '',
  className = '',
  children,
}: Props) => {
  return (
    <div>
      <label
        className={clsx('block text-sm font-medium text-gray-700', className)}
      >
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {/* TODO: Error handling */}
    </div>
  );
};
