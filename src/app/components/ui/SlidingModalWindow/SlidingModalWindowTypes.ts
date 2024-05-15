import { ReactNode } from 'react';

export interface SlidingModalWindowProps {
  handleClose: () => void;
  open: boolean;
  children: ReactNode;
}
