"use server"

import { PrismaClient } from '@prisma/client'

export default async function deleteUser(id : string) {
  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.delete({
      where: {
        id: id
      }
    })
    return { success: true, data: user }
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}