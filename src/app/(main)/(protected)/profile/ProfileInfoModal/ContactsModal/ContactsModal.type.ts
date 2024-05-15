import { ISpecialists } from '@/lib/store/types';

export interface ContactsModalProps {
  exit: () => void;
  open: boolean;
  specialist: ISpecialists;
}
