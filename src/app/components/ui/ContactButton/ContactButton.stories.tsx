import type { Meta, StoryObj } from '@storybook/react';

import ContactButton from './ContactButton';

const meta = {
  argTypes: {},
  component: ContactButton,
  tags: ['autodocs'],
  title: 'ComponentsButton',
} satisfies Meta<typeof ContactButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactBtn: Story = {
  args: {},
};
