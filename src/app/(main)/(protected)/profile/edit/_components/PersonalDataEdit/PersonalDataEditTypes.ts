import { Control, UseFormWatch } from 'react-hook-form';
import { ProfileFormValues } from '../PersonalData/PersonalDataTypes';

export interface PersonalDataEditProps {
  control: Control<ProfileFormValues>;
  watch: UseFormWatch<ProfileFormValues>;
}
