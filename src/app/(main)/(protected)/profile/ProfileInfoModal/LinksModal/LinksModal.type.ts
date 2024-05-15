import { ISpecialists } from '@/lib/store/types';

export interface LinksModalProps {
  specialist: ISpecialists;
  exit: () => void;
  open: boolean;
}
