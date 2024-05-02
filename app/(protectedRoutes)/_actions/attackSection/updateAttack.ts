"use server" 

import { PrismaClient } from "@prisma/client"

export const updateAttack = async (attackId: string, key: string, value: string) => {
  try {
    const prisma = new PrismaClient()
    const updatedAttack = await prisma.attackData.update({
      where: {
        id: attackId
      },
      data: {
        [key]: value
      }
    })
    return { success: true, updatedAttack }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to update attack" }
  }
}