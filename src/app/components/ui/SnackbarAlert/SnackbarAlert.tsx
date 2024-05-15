'use client';
import * as SC from './SnackbarAlert.style';
import Image from 'next/image';
interface SnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const SnackbarAlert = ({ open, message, onClose }: SnackbarProps) => {
  const ICON_SIZE = 24;
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  return (
    <SC.SnackbarWrapper
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      onClick={handleClose}
    >
      <SC.SnackbarContent>
        <Image src={'/images/checkGreen.svg'} alt={'icon check'} height={ICON_SIZE} width={ICON_SIZE} />
        {message}
      </SC.SnackbarContent>
    </SC.SnackbarWrapper>
  );
};

export default SnackbarAlert;
