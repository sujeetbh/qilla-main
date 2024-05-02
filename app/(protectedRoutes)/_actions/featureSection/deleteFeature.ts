"use server"

import { PrismaClient } from "@prisma/client"

export const deleteFeature = async (featureId: string) => {
  try {
    const prisma = new PrismaClient()
    const deletedFeature = await prisma.featureData.delete({
      where: {
        id: featureId
      }
    })
    return { success: true, data: deletedFeature }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to delete feature" }
  }
}