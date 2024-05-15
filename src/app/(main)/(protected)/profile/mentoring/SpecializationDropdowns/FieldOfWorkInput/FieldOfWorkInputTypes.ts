import { Control } from 'react-hook-form';
import { MentoringFormValues } from '../../MentoringTab/MentoringTypes';

export interface FieldOfWorkInputProps {
  control: Control<MentoringFormValues>;
  removeInput: (i: number) => void;
  index: number;
}
