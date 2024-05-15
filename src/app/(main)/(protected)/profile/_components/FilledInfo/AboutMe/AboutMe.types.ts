import { ISpecialists } from '@/lib/store/types';

export interface AboutMeProps {
  specialist: ISpecialists;
  openAboutMeModal: () => void;
}
