export interface PropsButton {
  nameButton: string[];
  activeButton: string;
  onClickButton: (i: string) => void;
  disabled?: string[];
}

export interface Active {
  active: boolean;
}
