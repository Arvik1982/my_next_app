import { ISpecialists } from '@/lib/store/types';

export interface EducationModalProps {
  specialist: ISpecialists;
  exit: () => void;
  open: boolean;
}
