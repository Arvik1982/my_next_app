import { boolean, z } from 'zod';

export interface NewPasswordProps {
  exit: () => void;
  open: boolean;
  params: {
    code: string;
  };
}

const Inputs = z.object({
  password: z.string(),
  confirmPassword: z.string(),
  exit: boolean(),
});
export type NewPasswordFormValues = z.infer<typeof Inputs>;
