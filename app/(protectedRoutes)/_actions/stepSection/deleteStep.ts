"use server"

import { PrismaClient } from "@prisma/client"

export const deleteStep = async (stepId: string) => {
  try {
    const prisma = new PrismaClient()
    const deletedStep = await prisma.stepsData.delete({
      where: {
        id: stepId
      }
    })
    return { success: true, deletedStep}
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to delete step" }
  }
}