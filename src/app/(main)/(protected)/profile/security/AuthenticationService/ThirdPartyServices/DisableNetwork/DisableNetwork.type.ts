export interface PropsDisableNetwork {
  exit: () => void;
  open: boolean;
  disable: (network: string) => void;
  network: string;
}
