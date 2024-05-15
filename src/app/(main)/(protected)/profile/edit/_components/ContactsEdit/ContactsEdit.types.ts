import { Control } from 'react-hook-form';
import { ContactsFormValues } from '../ContactsTab/ContactsTab.types';

export interface ContactsEditProps {
  control: Control<ContactsFormValues>;
}
