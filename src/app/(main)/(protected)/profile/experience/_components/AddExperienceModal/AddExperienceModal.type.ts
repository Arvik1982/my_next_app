import { Dispatch, SetStateAction } from 'react';

export interface AddExperienceModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
