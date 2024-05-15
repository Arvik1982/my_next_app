export interface ConfirmationChangeEmailProps {
  resend: (email: string) => void;
  exit: () => void;
  open: boolean;
  email: string;
}
