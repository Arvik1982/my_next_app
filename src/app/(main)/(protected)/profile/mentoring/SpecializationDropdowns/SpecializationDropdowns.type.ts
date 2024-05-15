import { Control } from 'react-hook-form';
import { MentoringFormValues } from '../MentoringTab/MentoringTypes';

export interface Props {
  control: Control<MentoringFormValues>;
  directions: string[];
}
