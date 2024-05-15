'use client';
import { CheckboxProps } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import * as SC from './BpCheckbox.style';
import { BpCheckboxProps } from './BpCheckbox.type';

const BpCheckbox = (props: CheckboxProps & BpCheckboxProps) => {
  return (
    <SC.CheckboxContainer>
      <Checkbox
        disableRipple
        color='default'
        checkedIcon={<SC.BpCheckedIcon />}
        icon={<SC.BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
      <SC.Label>{props.label}</SC.Label>
    </SC.CheckboxContainer>
  );
};
export default BpCheckbox;
