import { ISpecialists } from '@/lib/store/types';

export interface ProjectProps {
  project: {
    nameProject: string;
    authors: ISpecialists[];
    projectCover: File | null;
    link: string;
    checked: boolean;
    keyWords: string[];
  };
}
