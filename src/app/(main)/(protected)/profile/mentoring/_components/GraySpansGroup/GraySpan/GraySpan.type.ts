import { Control } from 'react-hook-form';
import { MentoringFormValues } from '../../../MentoringTab/MentoringTypes';

export interface GraySpanProps {
  control: Control<MentoringFormValues>;
  value: Set<string>;
  onChange: (value: Set<string>) => void;
  active: boolean;
  text: string;
}
