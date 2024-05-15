import { FieldValues, UseFormWatch } from 'react-hook-form';

export interface PropsButton {
  nameButton: string[];
  activeButton: string;
  onClickButton: (i: string) => void;
  watch: UseFormWatch<FieldValues>;
}

export interface Active {
  active: boolean;
}
