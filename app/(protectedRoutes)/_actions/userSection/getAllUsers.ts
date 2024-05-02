"use server"

import { PrismaClient } from '@prisma/client'

export default async function getAllUsers() {
  const prisma = new PrismaClient()
  try {
    const users = await prisma.user.findMany({})
    return users
  } catch (error) {
    console.error(error)
  }
}