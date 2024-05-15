import { z } from 'zod';

export interface ConnectionEmailProps {
  exit: () => void;
  open: boolean;
}

const Inputs = z.object({
  email: z.string().email(),
  newPassword: z.string(),
  confirmNewPassword: z.string(),
});
export type FormValues = z.infer<typeof Inputs>;
