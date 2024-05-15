'use client';
import { ComponentProps, FC } from 'react';
import * as SC from './ButtonGrey.style';
import { Button as MUIButton } from '@mui/material';
import { ChildProps } from 'postcss';

const ButtonGrey: FC<ComponentProps<typeof MUIButton> & ChildProps> = (props) => {
  return (
    <SC.StyledButton disableRipple {...props}>
      <SC.ButtonText>{props.children}</SC.ButtonText>
    </SC.StyledButton>
  );
};

export default ButtonGrey;
