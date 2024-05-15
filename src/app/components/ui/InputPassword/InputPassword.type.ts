import { UseFormRegisterReturn } from 'react-hook-form';

export interface TextFieldProps {
  register: UseFormRegisterReturn<string>;
  error: boolean;
  errorText?: string;
  label: string;
}

export interface Err {
  error: boolean;
}
