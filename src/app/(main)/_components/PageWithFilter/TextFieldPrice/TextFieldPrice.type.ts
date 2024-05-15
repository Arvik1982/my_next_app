import { Control, FieldValues } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

export interface OutlinedInputContainerProps {
  active: boolean;
}
export interface TextFieldPriceProps {
  name: string;
  control: Control<FieldValues>;
  type: HTMLInputTypeAttribute;
  currency: string;
  onChangePrice: (e: string) => void;
  text: string;
}
