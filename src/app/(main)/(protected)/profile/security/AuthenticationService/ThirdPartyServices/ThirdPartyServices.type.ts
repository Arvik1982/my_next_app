export interface PropsThirdPartyServices {
  gosuslugiChecked?: boolean;
  gosuslugiToggle: () => void;
  openWindow: string;
  setOpenWindow: React.Dispatch<React.SetStateAction<string>>;
}
