"use server"

import { PrismaClient } from "@prisma/client"

export const updateHeroData = async (heroId: string, key: string, value: string) => {
  try {
    const prisma = new PrismaClient()
    const updatedHero = await prisma.heroData.update({
      where: {
        id: heroId
      },
      data: {
        [key]: value
      }
    })
    return { success: true, data: updatedHero }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to update hero" }
  }
}