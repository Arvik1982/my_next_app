import { Dispatch, SetStateAction } from 'react';

export interface PopupButtonProps {
  open: boolean;
}

export interface ExperiencePopupProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
