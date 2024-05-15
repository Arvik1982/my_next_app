import React from 'react';
import { Meta, Story } from '@storybook/react';
import ButtonGrey from './ButtonGrey';

export default {
  title: 'Components/ButtonGrey',
  tags: ['autodocs'],
  component: ButtonGrey,
} as Meta;

const Template: Story = (args) => <ButtonGrey {...args} />;

export const BtnGrey = Template.bind({});
BtnGrey.args = {
  children: 'Button Grey',
};
