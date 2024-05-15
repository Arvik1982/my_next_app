import { Control } from 'react-hook-form';
import { ContactsFormValues } from '../ContactsTab/ContactsTab.types';

export interface LinkInputProps {
  control: Control<ContactsFormValues>;
  removeInput: (i: number) => void;
  index: number;
}
