
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const credetialConfig = CredentialsProvider({
  name: 'credentials',
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials, req) {
    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email as string
      }
    })

    if (user && user.password === credentials.password) {
      return user
    } else {
      return null
    }
  }
})

export const { 
  auth, 
  signIn,
  handlers: { GET, POST }
} = NextAuth({
  pages: {
    signIn: '/auth/login',
  },
  providers: [
    credetialConfig
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: 'jwt' },
  adapter: PrismaAdapter(prisma),
})