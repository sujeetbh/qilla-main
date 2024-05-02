"use server"

import { PrismaClient } from '@prisma/client'

export const editUser = async (id: string, email: string, password: string) => {
  try {
    const prisma = new PrismaClient()

    const user = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        email: email,
        password: password,
      }
    })

    return { success: true, data: user}

  } catch (error){
    console.error(error)
    return { success: false, error: error }
  }
}