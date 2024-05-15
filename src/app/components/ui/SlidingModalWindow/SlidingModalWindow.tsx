'use client';

import React, { FC } from 'react';
import * as SC from './SlidingModalWindow.style';
import { SlidingModalWindowProps } from '@/app/components/ui/SlidingModalWindow/SlidingModalWindowTypes';

const SlidingModalWindow: FC<SlidingModalWindowProps> = ({ open = true, children, handleClose }) => {
  const iconSize = 68;
  return (
    <div>
      <SC.ModalContainer
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <>
          <SC.ExitIcon onClick={handleClose} src={'/images/exit.svg'} alt={'exit'} width={iconSize} height={iconSize} />
          <SC.BoxContainer>{children}</SC.BoxContainer>
        </>
      </SC.ModalContainer>
    </div>
  );
};
export default SlidingModalWindow;
