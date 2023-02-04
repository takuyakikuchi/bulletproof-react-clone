import { Spinner } from './Spinner';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Elements/Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
