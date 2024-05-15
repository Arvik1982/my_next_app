import { Meta, Story } from '@storybook/react';
import { FieldValues, Path, useForm } from 'react-hook-form';
import ControlSplitButtonGroup from './ControlSplitButtonGroup';
import { ControlSplitBtnProps } from './ControlSplitButtonGroup.type';

export default {
  title: 'Components/ControlSplitButtonGroup',
  component: ControlSplitButtonGroup,
} as Meta;

type FormData = {
  example: string;
};

const Template: Story<ControlSplitBtnProps<FieldValues, Path<FieldValues>>> = ({ control, ...args }) => {
  const { control: formControl } = useForm<FormData>();
  return <ControlSplitButtonGroup control={control || formControl} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'example',
  list: ['Option1', 'Option2', 'Option3'],
  defaultValue: 'Option1',
};
