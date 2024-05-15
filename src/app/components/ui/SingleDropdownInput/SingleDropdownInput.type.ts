import { Control, FieldValues, Path, PathValue } from 'react-hook-form';

export interface SingleDropdownInputProps<T extends FieldValues, U extends Path<T>> {
  name: U;
  placeholder?: string;
  control: Control<T>;
  list: string[];
  defaultValue?: PathValue<T, U>;
  helperText?: string;
  isRequired?: boolean;
}
