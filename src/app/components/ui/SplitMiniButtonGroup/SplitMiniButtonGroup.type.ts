export interface PropsButton {
  nameButton: string[];
  activeButton: string;
  onClickButton: (i: string) => void;
}

export interface Active {
  active: boolean;
}
