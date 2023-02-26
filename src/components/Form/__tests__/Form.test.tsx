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

const TestForm = ({onSubmit}: {onSubmit: () => void}) => {
  return (
    <Form<typeof testData, typeof schema>
        onSubmit={onSubmit}
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
  )
}

describe('Form', () => {
  /**
   * Register a callback to be called after each one of the tests in the current context completes.
   * @see https://vitest.dev/api/#aftereach
   */
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should execute handleSubmit with the form input, when a user submit the form', async () => {
    // Arrange
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    render(TestForm({onSubmit: handleSubmit}));

    // Act
    await user.type(screen.getByLabelText(/title/i), testData.title);
    await user.click(screen.getByRole('button', { name: /submit/i }));

    // Assert
    waitFor(() => expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything()));
  });

  it('should should an error message and not execute handleSubmit when the form inputs are invalid', async () => {
    // Arrange
    const user = userEvent.setup();
    const handleSubmit = vi.fn();
    render(TestForm({onSubmit: handleSubmit}));

    // Act
    await user.click(screen.getByRole('button', { name: /submit/i }));
  
    // Assert
    screen.findByRole((/alert/i), { name: /required/i });
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
