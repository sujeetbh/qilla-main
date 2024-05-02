'use client'

import * as z from 'zod';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { 
  Form,
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "../ui/form"
import { useForm } from "react-hook-form"
import { LoginSchema } from "./loginSchema"
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { loginIn } from '@/app/actions/login';

const FormError = ({ message }: { message: string | undefined }) => {
  if (!message) return null

  return (
    <div className="
      bg-red-500/15
      p-3 
      rounded-md 
      flex 
      items-center 
      gap-x-2 
      text-sm 
      text-red-500">
      <ExclamationTriangleIcon className='h-4 w-4' />
      <p>{message}</p>
    </div>
  )
}


export function LoginForm() {
  const router = useRouter();

  const [error, setError] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
  })

  const onSubmit = async(data: z.infer<typeof LoginSchema>) => {
    setError("")
    const response = await loginIn(data)
    setError(response?.error)
  }

  return (
    <Card className='w-full max-w-sm bg-black'>
      <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
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
                        autoComplete='false'
                        disabled={isPending}
                        placeholder="himanshu@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        disabled={isPending} 
                        autoComplete='false'
                        type="password"
                        placeholder="********" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormError message={error} />
              <Button type="submit" className="w-full">Login</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  ) 
}