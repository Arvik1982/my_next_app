import { ISpecialists } from '@/lib/store/types';

export interface AboutMeModalProps {
  exit: () => void;
  open: boolean;
  specialist: ISpecialists;
}
