import * as z from 'zod';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const ContactSchema = z.object({
  email: z.string()
    .email({ message: 'Invalid email format' }) // Keep the general message
    .refine((value) => emailRegex.test(value), {
      message: 'Please enter a valid email address',
    }),
  query: z.string().min(1, {
    message: 'Query is required'
  }),
})