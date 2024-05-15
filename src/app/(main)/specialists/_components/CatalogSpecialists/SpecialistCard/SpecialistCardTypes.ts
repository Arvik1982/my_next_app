import { ISpecialists } from '@/lib/store/types';

export interface SpecialistCardProps {
  specialist: ISpecialists;
  // projects: Project[];
  // userName: string;
  // price: number;
  // ready: boolean;
  // expert: boolean;
  // post: string;
  // comment: number;
  // avatar: string;
  // favorite: boolean;
  // id: number;
  // location: string;
  // currency: string;
  searchedText?: string;
}

interface Project {
  src: string;
  id: number;
}
