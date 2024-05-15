import { Control, FieldValues } from 'react-hook-form';
import { InitialStateType } from '@/lib/store/filterSpecialistsSlice/filterSpecialistsSlice';

export interface AutocompleteIntroductionWithoutControlProps {
  options: string[];
  list: string[];
  control: Control<FieldValues>;
  name: keyof InitialStateType;
  onClick: (e: string) => void;
  placeholder: string;
  label: string;
  deleteOption: (option: keyof InitialStateType, item: string) => void;
}
