import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FieldValues, Path, useForm } from 'react-hook-form';

import Input, { Props } from './Input';

export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  component: Input,
} as Meta;

const Template: Story<Props<FieldValues, Path<FieldValues>>> = (args) => {
  const { control } = useForm();

  return <Input {...args} control={control} />;
};

export const InputStories = Template.bind({});
InputStories.arguments = {
  name: 'example',
  placeholder: 'Enter text',
  type: 'text',
};
