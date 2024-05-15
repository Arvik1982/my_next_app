import { z } from 'zod';

const phone = z.object({
  phoneCode: z.string(),
  phoneNumber: z.string(),
});

const network = z.object({
  id: z.number().optional(),
  network_name: z.string(),
  username: z.string(),
});

const link = z.object({
  linkName: z.string(),
  linkURL: z.string(),
});

const Inputs = z.object({
  phone,
  email: z.string(),
  networks: z.array(network),
  site: z.string(),
  links: z.array(link),
});

export type NetworkParams = z.infer<typeof network>;
export type ContactsFormValues = z.infer<typeof Inputs>;
