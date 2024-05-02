"use server"

import { PrismaClient } from "@prisma/client"

export const fetchHeroData = async () => {
  try {
    const prisma = new PrismaClient()

    const herodata = await prisma.heroData.findMany({})
    return herodata

  } catch (error){
    console.error(error)
  }
}