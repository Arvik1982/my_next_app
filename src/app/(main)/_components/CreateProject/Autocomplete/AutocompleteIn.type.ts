import { ISpecialists } from '@/lib/store/types';

export interface AutocompleteProps {
  specialists: ISpecialists[];
  addAuthor: (spec: ISpecialists) => void;
  placeholder: string;
  label: string;
  authors: ISpecialists[];
  deleteAuthor: (spec: ISpecialists) => void;
  goToPage: (e: string) => void;
}
export interface StyledAutocompleteRootProps {
  active: boolean;
}
