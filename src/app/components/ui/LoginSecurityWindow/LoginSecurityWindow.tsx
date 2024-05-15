'use client';
import * as SC from './LoginSecurityWindow.style';
import { FC, PropsWithChildren } from 'react';
import Exit from '@/app/components/ui/ExitIcon/Exit';
export interface Props {
  exit: () => void;
  open: boolean;
}
const LoginSecurityWindow: FC<PropsWithChildren & Props> = ({ children, exit, open }) => {
  return (
    <SC.ModalContainer onClose={exit} open={open}>
      <SC.Container>
        {children}
        <Exit exit={exit} />
      </SC.Container>
    </SC.ModalContainer>
  );
};

export default LoginSecurityWindow;
