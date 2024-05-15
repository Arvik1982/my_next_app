import React from 'react';
import { Story } from '@storybook/react';
import BpCheckbox from './BpCheckbox';
import { BpCheckboxProps } from './BpCheckbox.type';

export default {
  title: 'Components/BpCheckbox',
  component: BpCheckbox,
  tags: ['autodocs'],
};

const Template: Story<BpCheckboxProps> = (args) => <BpCheckbox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checkbox Label',
};
