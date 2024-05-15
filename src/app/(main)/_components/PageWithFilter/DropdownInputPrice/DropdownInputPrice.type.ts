import { Control, FieldValues } from 'react-hook-form';

export interface DropdownInputPriceProps {
  name: string;
  control: Control<FieldValues>;
  click: (e: string) => void;
}
