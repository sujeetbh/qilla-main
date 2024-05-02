"use server"

import { PrismaClient } from "@prisma/client"

export const deleteAttack = async (attackId: string) => {
  try {
    const prisma = new PrismaClient()
    const deletedAttack = await prisma.attackData.delete({
      where: {
        id: attackId
      }
    })
    return { success: true, deletedAttack}
  } catch (error) {
    console.error(error)
    return { success: false, error: "Failed to delete attack" }
  }
}