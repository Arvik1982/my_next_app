import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputRegisterProps {
  type: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn<string>;
  err?: boolean;
}
export interface Err {
  err: boolean;
}
