import { z } from 'zod';

const specialization = z.object({
  name: z.string(),
  direction: z.object({
    name: z.string(),
  }),
});

const Inputs = z.object({
  link: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  date: z.string(),
  country: z.string(),
  city: z.string(),
  language: z.string(),
  gmt: z.string(),
  status: z.string(),
  specializations: z.array(specialization),
  grade: z.string(),
  skills: z.string(),
  aboutYourself: z.string(),
});

export type ProfileFormValues = z.infer<typeof Inputs>;
