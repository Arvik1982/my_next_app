import { ISpecialists } from '@/lib/store/types';

export interface SpecSlidingModalProps {
  specialist: ISpecialists;
  handleClose: () => void;
  openModal: boolean;
  // currency?: string;
  // post: string;
  // userName: string;
  // avatar: string;
  // projects: Projects[];
  // expert: boolean;
  // price: number;
  // location: string;
  // favorite: boolean;
  // id: number;
}

interface Projects {
  id: number;
  src: string;
}
