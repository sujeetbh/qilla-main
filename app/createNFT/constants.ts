import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(6, {
    message: 'Name is Required',
  }),
  supply: z.number().min(1, {
    message: 'Supply is Required',
  }),
  description: z.string().min(1),
  link: z.string()
});
