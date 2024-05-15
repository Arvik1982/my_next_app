import { Control, UseFieldArrayRemove } from 'react-hook-form';
import { ContactsFormValues } from '../ContactsTab/ContactsTab.types';

export interface NetworkInputProps {
  control: Control<ContactsFormValues>;
  index: number;
  remove: UseFieldArrayRemove;
}
