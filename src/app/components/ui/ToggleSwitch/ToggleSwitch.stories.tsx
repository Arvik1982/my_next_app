import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useForm, Control, FieldValues } from 'react-hook-form';

import ToggleSwitch, { Props } from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  tags: ['autodocs'],
  component: ToggleSwitch,
} as Meta;

const Template: Story<Props<FieldValues, string>> = (args) => {
  const { control } = useForm();

  return <ToggleSwitch {...args} control={control as Control<FieldValues>} />;
};

export const Switch = Template.bind({});
Switch.args = {
  label: 'Toggle Switch',
  name: 'toggle Switch',
};
