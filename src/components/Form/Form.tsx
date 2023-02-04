import clsx from 'clsx';
import { useForm, UseFormReturn } from 'react-hook-form';
import { ZodTypeDef, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type Props<Schema> = {
  // id?: string;
  className?: string;
  // TODO: Type onSubmit.
  onSubmit: () => void;
  schema: Schema;
  children: (methods: UseFormReturn) => React.ReactNode;
};

export const Form = <
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<
    unknown,
    ZodTypeDef,
    unknown
  >
>({
  // id,
  className = '',
  onSubmit,
  schema,
  children,
}: Props<Schema>) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form
      className={clsx('space-y-6', className)}
      // TODO: onSubmit
      onSubmit={methods.handleSubmit(onSubmit)}
      // id={id}
    >
      {children(methods)}
    </form>
  );
};
