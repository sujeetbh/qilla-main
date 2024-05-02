"use server"

import { PrismaClient } from "@prisma/client"

export const addUser = async (data : any) => {
  try {
    const prisma = new PrismaClient()

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
      }
    })

    return user

  } catch (error){
    console.error(error)
  }
}