import { z } from 'zod';

const specialization = z.object({
  direction: z.string(),
  specialization: z.string(),
});

const Inputs = z.object({
  level: z.set(z.string()),
  specialization: z.array(specialization),
  requests: z.set(z.string()),
  skills: z.set(z.string()),
  aboutYourself: z.string(),
  payment: z.object({
    type: z.string(),
    price: z.number(),
    currency: z.string(),
    period: z.string(),
    first_free: z.boolean(),
  }),
});

export type MentoringFormValues = z.infer<typeof Inputs>;
