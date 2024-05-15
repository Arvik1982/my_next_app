import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import FilterButtonsGroup, { Props } from './FilterButtonsGroup';

export default {
  title: 'Components/FilterButtonsGroup',
  tags: ['autodocs'],
  component: FilterButtonsGroup,
} as Meta;

const Template: Story<Props> = (args) => {
  const { control } = useForm();

  return <FilterButtonsGroup {...args} control={control} />;
};

export const FilterBtnsGroup = Template.bind({});
FilterBtnsGroup.args = {
  name: 'filter',
  list: ['Option 1', 'Option 2', 'Option 3'],
};
