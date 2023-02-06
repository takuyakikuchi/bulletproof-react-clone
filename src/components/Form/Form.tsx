import clsx from 'clsx';
import { useForm, UseFormReturn, FieldValues } from 'react-hook-form';
import { ZodTypeDef, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type Props<TFormValues extends FieldValues, Schema> = {
  // id?: string;
  className?: string;
  // TODO: Type onSubmit.
  onSubmit: (values: TFormValues) => void;
  schema: Schema;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

export const Form = <
  TFormValues extends FieldValues = FieldValues,
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
}: Props<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
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
