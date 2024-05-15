import { ISpecialists } from '@/lib/store/types';

export interface EducationProps {
  specialist: ISpecialists;
  openEducationModal: () => void;
}
