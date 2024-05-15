import { Control, FieldValues, Path, PathValue } from 'react-hook-form';

export interface ObjectDropdownInputProps<T extends FieldValues, U extends Path<T>> {
  name: U;
  placeholder?: string;
  control: Control<T>;
  list: { name: string; id: number }[];
  defaultValue?: PathValue<T, U>;
  helperText?: string;
  isRequired?: boolean;
  disabled?: boolean;
}
