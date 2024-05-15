import { Control, FieldValues } from 'react-hook-form';

export interface DropdownInputProps {
  name: string;
  placeholder?: string;
  control: Control<FieldValues>;
  list: string[];
  defaultValue?: string;
  helperText?: string;
  isRequired?: boolean;
  click?: (i: string) => void;
}
