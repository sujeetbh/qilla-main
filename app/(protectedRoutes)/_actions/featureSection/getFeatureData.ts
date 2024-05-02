"use server"

import { PrismaClient } from "@prisma/client"

export async function fetchFeatureData () {
  try {
    const prisma = new PrismaClient()

    const featuredata = await prisma.featureData.findMany({})
    return featuredata

  } catch (error){
    console.error(error)
  }
}