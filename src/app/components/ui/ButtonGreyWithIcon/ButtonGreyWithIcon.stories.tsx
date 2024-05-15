import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';

import ButtonGreyWithIcon from './ButtonGreyWithIcon';
import { Button as MUIButton } from '@mui/material';
import { ChildProps } from 'postcss';
import Image from 'next/image';
import i from '../../../../../public/images/exit.svg';

export default {
  title: 'Components/ButtonGreyWithIcon',
  tags: ['autodocs'],
  component: ButtonGreyWithIcon,
} as Meta;

const Temp: Story<ComponentProps<typeof MUIButton> & ChildProps & { name: string }> = (args) => {
  return <ButtonGreyWithIcon {...args} />;
};
const ICON_SIZE = 24;
export const BtnGreyWithIcon = Temp.bind({});
BtnGreyWithIcon.args = {
  children: <Image src={i} alt='remove icon' width={ICON_SIZE} height={ICON_SIZE} />,
  name: 'Button Text',
};
