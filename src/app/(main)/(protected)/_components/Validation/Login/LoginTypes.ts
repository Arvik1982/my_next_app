import { z } from 'zod';

const Inputs = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof Inputs>;
