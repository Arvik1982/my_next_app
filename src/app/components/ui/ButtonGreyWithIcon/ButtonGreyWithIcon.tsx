import { ComponentProps, FC } from 'react';
import * as SC from './ButtonGreyWithIcon.style';
import { Button as MUIButton } from '@mui/material';
import { ChildProps } from 'postcss';

const ButtonGreyWithIcon: FC<ComponentProps<typeof MUIButton> & ChildProps & { name: string }> = (props) => {
  return (
    <SC.StyledButton disableRipple {...props}>
      {props.children}
      <SC.ButtonText>{props.name}</SC.ButtonText>
    </SC.StyledButton>
  );
};

export default ButtonGreyWithIcon;
