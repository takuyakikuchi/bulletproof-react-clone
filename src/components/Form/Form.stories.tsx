import { Form, InputField, TextAreaField } from '@/components/Form';
import { z } from 'zod';
import { Button } from '@/components/Elements';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  notes: z.string().optional(),
});

type Schema = z.infer<typeof schema>;
import type { Meta, StoryObj } from '@storybook/react';

const FormSample = () => {
  return (
    <Form<Schema, typeof schema> onSubmit={() => null} schema={schema}>
      {({ register, formState }) => (
        <>
          <InputField
            type="email"
            label="Email Address"
            error={formState.errors.email}
            registration={register('email')}
          />
          <InputField
            type="password"
            label="Password"
            error={formState.errors.password}
            registration={register('password')}
          />
          <TextAreaField
            label="Notes"
            error={formState.errors.notes}
            registration={register('notes')}
          />
          <div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </>
      )}
    </Form>
  );
};

const meta: Meta<typeof FormSample> = {
  title: 'Components/Form',
  component: FormSample,
};

export default meta;
type Story = StoryObj<typeof FormSample>;

export const SampleForm: Story = {};
