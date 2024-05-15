import React from 'react';
import { Meta, Story } from '@storybook/react';

import SplitMiniButtonGroup from './SplitMiniButtonGroup';
import { PropsButton } from './SplitMiniButtonGroup.type';

export default {
  title: 'Components/SplitMiniButtonGroup',
  tags: ['autodocs'],
  component: SplitMiniButtonGroup,
} as Meta;

const Template: Story<PropsButton> = (args) => {
  const activeButton = args.activeButton;

  const onClickButton = () => {};

  return <SplitMiniButtonGroup {...args} activeButton={activeButton} onClickButton={onClickButton} />;
};

export const SplitMiniBtnGroup: Story<PropsButton> = Template.bind({});
SplitMiniBtnGroup.args = {
  nameButton: ['Button 1', 'Button 2', 'Button 3'],
  activeButton: 'Button 1',
};
