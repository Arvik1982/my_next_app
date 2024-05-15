import { routs } from '@/lib/routes';

export interface ItemIconProps {
  isSpecialists: boolean;
}

export interface MenuItem {
  name: keyof typeof routs;
  text: string;
  Icon: string;
  disabled?: boolean;
}
