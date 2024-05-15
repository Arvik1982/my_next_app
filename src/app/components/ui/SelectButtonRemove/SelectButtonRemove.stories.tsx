import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import SelectButtonRemove from './SelectButtonRemove';

export interface Props {
  option: string;
  endIcon: JSX.Element;
  name: string;
  control: Control<FieldValues>;
}

export default {
  title: 'Components/SelectButtonRemove',
  tags: ['autodocs'],
  component: SelectButtonRemove,
} as Meta;
const Template: Story<Props> = (args) => {
  const { control } = useForm();

  return <SelectButtonRemove option={args.option} name={args.name} control={control} />;
};

export const SelectBtnRemove = Template.bind({});
SelectBtnRemove.args = {
  name: 'example',
  option: 'Option 1',
};
