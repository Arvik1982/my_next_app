import React, { FC, PropsWithChildren } from 'react';
import * as SC from './ProfileInfoModal.style';

interface ProfileInfoModalProps {
  exit: () => void;
  open: boolean;
}

const ProfileInfoModal: FC<PropsWithChildren & ProfileInfoModalProps> = ({ exit, open, children }) => {
  const ICON_SIZE = 24;
  return (
    <SC.Container open={open} onClose={exit}>
      <SC.BoxContainer>
        <SC.Exit onClick={exit} src={'/images/exit.svg'} alt={'exit'} width={ICON_SIZE} height={ICON_SIZE} />
        {children}
      </SC.BoxContainer>
    </SC.Container>
  );
};

export default ProfileInfoModal;
