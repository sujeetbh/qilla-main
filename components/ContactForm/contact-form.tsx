'use client';

import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { ContactSchema } from './contactSchema';
import { Textarea } from '../ui/textarea';
import { sendEmail } from '@/app/actions/sendEmail';
import toast, { Toaster } from 'react-hot-toast';

const FormError = ({ message }: { message: string | undefined }) => {
  if (!message) return null;

  return (
    <div
      className="
      bg-red-500/15
      p-3 
      rounded-md 
      flex 
      items-center 
      gap-x-2 
      text-sm 
      text-red-500"
    >
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

const ContactForm = () => {
  const router = useRouter();

  const [error, setError] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: '',
      query: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof ContactSchema>) => {
    const { success } = await sendEmail(data);
    if(!success) {
      toast.error('Failed to send email');
    } else {
      toast.success('Email sent successfully');
      form.resetField('email');
      form.resetField('query');
    }
  };

  return (
    <>
      <Card className="w-full max-w-sm bg-black">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Me</CardTitle>
          <CardDescription>
            Enter your email and query below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          autoComplete="false"
                          disabled={isPending}
                          placeholder="m@gmail.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="query"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Query</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          disabled={isPending}
                          id="query"
                          name="query"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormError message={error} />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </>
    
  );
}

export default ContactForm;