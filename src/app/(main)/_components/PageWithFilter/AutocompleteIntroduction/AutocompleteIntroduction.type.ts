import { Control, FieldValues } from 'react-hook-form';
import { InitialStateType } from '@/lib/store/filterSpecialistsSlice/filterSpecialistsSlice';

export interface AutocompleteIntroductionProps {
  list: string[];
  control: Control<FieldValues>;
  name: keyof InitialStateType;
  onClick: (e: string) => void;
  placeholder: string;
  label: string;
  options: string[];
  deleteOption: (option: keyof InitialStateType, item: string) => void;
}
export interface StyledAutocompleteRootProps {
  active: boolean;
}
