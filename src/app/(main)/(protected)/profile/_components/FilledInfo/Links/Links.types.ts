import { ISpecialists } from '@/lib/store/types';

export interface LinksProps {
  specialist: ISpecialists;
  openLinksModal: () => void;
}
