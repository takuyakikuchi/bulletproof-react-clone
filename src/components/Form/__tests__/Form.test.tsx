import { z } from 'zod';
import { render, screen, waitFor } from '@testing-library/react';
import { Form, InputField } from '@/components/Form';
import { Button } from '@/components/Elements';
import userEvent from '@testing-library/user-event';

const testData = {
  title: 'Hello World',
};

const schema = z.object({
  title: z.string(),
});

describe('Form', () => {
  /**
   * Register a callback to be called after each one of the tests in the current context completes.
   * @see https://vitest.dev/api/#aftereach
   */
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render and submit a basic Form component', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    await render(
      <Form<typeof testData, typeof schema>
        onSubmit={handleSubmit}
        schema={schema}
        id="my-form"
      >
        {({ register, formState }) => (
          <>
            <InputField
              label="Title"
              error={formState.errors.title}
              registration={register('title')}
            />
            <Button name="submit" type="submit" className="w-full">
              Submit
            </Button>
          </>
        )}
      </Form>
    );

    await user.type(screen.getByLabelText(/title/i), testData.title);
    await user.click(screen.getByRole('button', { name: /submit/i }));
    waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything())
    );
  });

  it('should fail submission if valiation fails', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn();

    await render(
      <Form<typeof testData, typeof schema>
        onSubmit={handleSubmit}
        schema={schema}
        id="my-form"
      >
        {({ register, formState }) => (
          <>
            <InputField
              label="Title"
              error={formState.errors.title}
              registration={register('title')}
            />

            <Button name="submit" type="submit" className="w-full">
              Submit
            </Button>
          </>
        )}
      </Form>
    );

    await user.click(screen.getByRole('button', { name: /submit/i }));
    screen.findByRole(/alert/i), { name: /required/i };
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
