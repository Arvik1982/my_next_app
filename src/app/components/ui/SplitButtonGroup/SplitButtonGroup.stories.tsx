import React from 'react';
import { Meta, Story } from '@storybook/react';

import SplitButtonGroup from './SplitButtonGroup';
import { PropsButton } from './SplitButtonGroup.type';

export default {
  title: 'Components/SplitButtonGroup',
  tags: ['autodocs'],
  component: SplitButtonGroup,
} as Meta;

const Template: Story<PropsButton> = (args) => {
  const activeButton = args.activeButton;

  const onClickButton = () => {};

  return <SplitButtonGroup {...args} activeButton={activeButton} onClickButton={onClickButton} />;
};

export const SplitBtnGroup: Story<PropsButton> = Template.bind({});
SplitBtnGroup.args = {
  nameButton: ['Button 1', 'Button 2', 'Button 3'],
  activeButton: 'Button 1',
};
