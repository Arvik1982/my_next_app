import { ISpecialists } from '@/lib/store/types';

export interface SkillsProps {
  specialist: ISpecialists;
  openSkillsModal: () => void;
}
