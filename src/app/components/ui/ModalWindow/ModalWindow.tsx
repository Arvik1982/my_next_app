import * as SC from './ModalWindow.style';
import React, { PropsWithChildren, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { ModalWindowProps } from '@/app/components/ui/ModalWindow/ModalWindow.type';

const ModalWindow: React.FC<ModalWindowProps & PropsWithChildren> = ({
  children,
  openTitle,
  showOpenButton = false,
}) => {
  const [open, setOpen] = useState(!showOpenButton);
  const [openButton, setOpenButton] = useState(showOpenButton);
  const handleClose = () => {
    setOpenButton(true);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpenButton(false);
    setOpen(true);
  };
  return (
    <div>
      {openButton && <Button onClick={handleOpen}>{openTitle}</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <SC.BoxContainer>
          <SC.CloseIcon priority onClick={handleClose} src={'/images/close.svg'} alt='exit' width={24} height={24} />
          {children}
        </SC.BoxContainer>
      </Modal>
    </div>
  );
};

export default ModalWindow;
