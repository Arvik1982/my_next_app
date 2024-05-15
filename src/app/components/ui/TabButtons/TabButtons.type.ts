export interface PropsButton {
  nameButton: string[];
  activeButton: string;
  onClickButton: (buttonName: string) => void;
  isDisabled?: boolean;
}

export interface StyleProps {
  active: boolean;
  isDisabled?: boolean;
}
