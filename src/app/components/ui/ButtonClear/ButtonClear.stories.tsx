import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonClear from './ButtonClear';

export default {
  title: 'ButtonClear',
  tags: ['autodocs'],
  component: ButtonClear,
} as Meta;

const Template: Story = (args) => <ButtonClear {...args} />;

export const BtnClear = Template.bind({});
BtnClear.args = {
  children: 'Button Clear',
};
