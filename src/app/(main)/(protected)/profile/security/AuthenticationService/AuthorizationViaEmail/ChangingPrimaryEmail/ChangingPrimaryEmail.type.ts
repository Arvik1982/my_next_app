import { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';

export interface ChangingPrimaryEmailProps {
  exit: () => void;
  open: boolean;
  extend: () => void;
  setNewEmail: Dispatch<SetStateAction<string>>;
}

const Inputs = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type FormValues = z.infer<typeof Inputs>;
