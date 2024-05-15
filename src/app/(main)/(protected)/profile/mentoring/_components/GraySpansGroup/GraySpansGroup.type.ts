import { Control } from 'react-hook-form';
import { MentoringFormValues } from '../../MentoringTab/MentoringTypes';

export interface GraySpansGroup {
  name: 'level' | 'requests' | 'skills';
  control: Control<MentoringFormValues>;
  list: string[];
}
