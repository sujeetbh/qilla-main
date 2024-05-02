"use server"

import { PrismaClient } from "@prisma/client"
import toast from "react-hot-toast"

export const updateStep = async (stepId: string, step: string) => {
  try {
    const prisma = new PrismaClient()
    const updatedStep = await prisma.stepsData.update({
      where: {
        id: stepId
      },
      data: {
        step
      }
    })
    return { success: true, updatedStep }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to update step" }
  }
}