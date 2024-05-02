"use server"

import { PrismaClient } from "@prisma/client"

export const fetchAttackData = async () => {
  try {
    const prisma = new PrismaClient()

    const attackdata = await prisma.attackData.findMany({})
    return attackdata

  } catch (error){
    console.error(error)
  }
}