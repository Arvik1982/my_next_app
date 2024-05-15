import React, { FC } from 'react';
import * as SC from './ContactButton.style';
import { Props } from './ContactButton.type';

const ContactButton: FC<Props> = ({ clickContactButton }) => {
  return (
    <SC.ConnectionButton onClick={clickContactButton} disableRipple variant={'contained'}>
      <SC.TextWrapper>Связаться</SC.TextWrapper>
    </SC.ConnectionButton>
  );
};

export default ContactButton;
