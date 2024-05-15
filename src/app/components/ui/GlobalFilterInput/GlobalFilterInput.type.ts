import { InitialCompaniesState } from '@/lib/store/filterCompaniesSlice/companiesSlice';
import { ISpecialists } from '@/lib/store/types';

type ExtendInitialState = InitialCompaniesState | ISpecialists;

export interface GlobalFilterInputProps {
  list: ExtendInitialState[];
  onClick(e: ExtendInitialState[]): void;
  onChange?: (newValue: string) => void;
  placeholder: string;
}
export interface StyledAutocompleteRootProps {
  active: boolean;
}
