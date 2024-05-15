import { ISpecialists } from '@/lib/store/types';
import { MouseEvent } from 'react';

export interface Props {
  specialist: ISpecialists;
  openPopup: boolean;
  closePopup: (e: MouseEvent<HTMLImageElement>) => void;
}
