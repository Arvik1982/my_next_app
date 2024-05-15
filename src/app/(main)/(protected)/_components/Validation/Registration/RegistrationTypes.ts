import { z } from 'zod';

const Inputs = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

export type RegistarionFormValues = z.infer<typeof Inputs>;

const SignUpParam = z.object({
  first_name: z.string(),
  second_name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type QuerySignUpParam = z.infer<typeof SignUpParam>;
