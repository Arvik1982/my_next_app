import { ISpecialists } from '@/lib/store/types';

export interface ContactsProps {
  specialist: ISpecialists;
  openContactsModal: () => void;
}
