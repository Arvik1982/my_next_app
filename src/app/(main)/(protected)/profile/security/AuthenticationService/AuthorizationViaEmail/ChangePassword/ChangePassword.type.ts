import { boolean, z } from 'zod';

export interface ChangePasswordProps {
  exit: () => void;
  open: boolean;
  openForgotPassword: (email?: string) => void;
  showNotice: () => void;
}

const Inputs = z.object({
  password: z.string(),
  newPassword: z.string(),
  confirmNewPassword: z.string(),
  logOutAll: boolean(),
});
export type FormValues = z.infer<typeof Inputs>;
