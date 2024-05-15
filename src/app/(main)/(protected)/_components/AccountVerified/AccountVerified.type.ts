export interface AccountVerifiedProps {
  exit: () => void;
  open: boolean;
  params: {
    code: string;
  };
}
