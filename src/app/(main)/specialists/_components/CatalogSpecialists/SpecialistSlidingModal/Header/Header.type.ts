import { ISpecialists } from '@/lib/store/types';

export interface Props {
  specialist: ISpecialists;
  openContactsModal: () => void;
}
