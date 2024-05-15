import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <Button {...args}>Click</Button>;

export const Btn = Template.bind({});
Btn.args = {};
