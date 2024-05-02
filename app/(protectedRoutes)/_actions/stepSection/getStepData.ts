"use server"

import { PrismaClient } from "@prisma/client"

export const fetchStepData = async () => {
  try {
    const prisma = new PrismaClient()

    const stepdata = await prisma.stepsData.findMany({})
    return stepdata

  } catch (error){
    console.error(error)
  }
}