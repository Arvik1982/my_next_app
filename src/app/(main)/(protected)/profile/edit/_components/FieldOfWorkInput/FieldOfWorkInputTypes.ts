import { MouseEvent } from 'react';
import { Control, UseFormWatch } from 'react-hook-form';
import { ProfileFormValues } from '../PersonalData/PersonalDataTypes';

export interface FieldOfWorkInputProps {
  control: Control<ProfileFormValues>;
  removeInput: (e: MouseEvent<HTMLButtonElement>, index: number) => void;
  index: number;
  watch: UseFormWatch<ProfileFormValues>;
}
