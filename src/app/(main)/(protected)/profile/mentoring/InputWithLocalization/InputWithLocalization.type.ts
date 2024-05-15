import { HTMLInputTypeAttribute } from 'react';
import { Control, UseFormReturn } from 'react-hook-form';
import { MentoringFormValues } from '../MentoringTab/MentoringTypes';

export interface InputWithLocalizationProps {
  name: 'aboutYourself';
  control: Control<MentoringFormValues>;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  watch: UseFormReturn<MentoringFormValues>['watch'];
}
