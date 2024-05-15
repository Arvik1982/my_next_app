import { ComponentProps, FC } from 'react';
import * as SC from './Button.style';
import { Button as MUIButton } from '@mui/material';

const Button: FC<ComponentProps<typeof MUIButton>> = (props) => {
  return <SC.StyledButton disableRipple {...props} />;
};

export default Button;
