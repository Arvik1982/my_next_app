import { ISpecialists } from '@/lib/store/types';

export interface ExperienceModalProps {
  specialist: ISpecialists;
  exit: () => void;
  open: boolean;
}
