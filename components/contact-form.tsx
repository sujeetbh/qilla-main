'use client';
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
import { Label } from '@/components/ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { sendEmail } from '@/app/actions/sendEmail';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: any) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('query', query);
    const { success } = await sendEmail(formData);
    setEmail('');
    setQuery('');
    if(success) {
      toast.success('Email sent successfully');
    } else {
      toast.error('Failed to send email');
    }
  };

  return (
    <>
      <Card className="w-full max-w-sm bg-black">
        <CardHeader>
          <CardTitle className="text-2xl">Contact me</CardTitle>
          <CardDescription>Enter your email and query.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form action={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                autoComplete="false"
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2 mt-4">
              <Label htmlFor="query">Query</Label>
              <Textarea
                id="query"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
              <Button type="submit" className="w-full mt-4">
                Send Email
              </Button>
          </form>
        </CardContent>
      </Card>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default ContactForm;
