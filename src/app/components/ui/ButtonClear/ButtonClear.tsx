import React, { ComponentProps, FC } from 'react';
import * as SC from './ButtonClear.style';
import { Button as MUIButton } from '@mui/material';
import { ChildProps } from 'postcss';

const ButtonClear: FC<ComponentProps<typeof MUIButton> & ChildProps> = (props) => {
  return (
    <SC.StyledButton disableRipple {...props}>
      <SC.ButtonText>{props.children}</SC.ButtonText>
    </SC.StyledButton>
  );
};

export default ButtonClear;
