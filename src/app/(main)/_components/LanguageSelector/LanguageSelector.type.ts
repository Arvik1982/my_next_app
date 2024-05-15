import { ProfileFormValues } from '@/app/(main)/(protected)/profile/edit/_components/PersonalData/PersonalDataTypes';
import { Control, UseFormWatch } from 'react-hook-form';

export interface ProfileEditLanguageSelectorProps {
  control: Control<ProfileFormValues>;
  watch: UseFormWatch<ProfileFormValues>;
}
