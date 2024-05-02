"use server"

import { PrismaClient } from '@prisma/client'

export const createStep = async ({ step } : { step: string }) => {
  try {
    const prisma = new PrismaClient();
    const createdStep = await prisma.stepsData.create({
      data: {
        step: step
      }
    })
    console.log("Created Step", createdStep)
  } catch (error) {
    console.log(error)
  }
}