import { ISpecialists } from '@/lib/store/types';

export interface ExperienceProps {
  specialist: ISpecialists;
  openExperienceModal: () => void;
}
