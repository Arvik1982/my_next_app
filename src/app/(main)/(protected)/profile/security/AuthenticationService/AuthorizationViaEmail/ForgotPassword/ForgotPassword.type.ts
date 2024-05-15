export interface ForgotPasswordProps {
  exit: () => void;
  open: boolean;
  resend: (email: string) => void;
  email: string;
}
