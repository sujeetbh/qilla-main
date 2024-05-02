"use server"

//user will give three inputs featureId, key of the feature and value of the feature let say they only want to update title or let say they only want to update the description 
//so they will give featureId, key and value of the feature they want to update

import { PrismaClient } from "@prisma/client"

export const updateFeature = async (featureId: string, key: string, value: string) => {
  try {
    const prisma = new PrismaClient()
    const updatedFeature = await prisma.featureData.update({
      where: {
        id: featureId
      },
      data: {
        [key]: value
      }
    })
    return { success: true, data: updatedFeature }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to update feature" }
  }
}