import { ISpecialists } from '@/lib/store/types';

export interface SkillsModalProps {
  specialist: ISpecialists;
  exit: () => void;
  open: boolean;
}
