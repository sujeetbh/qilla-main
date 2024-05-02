"use server"

import { PrismaClient } from '@prisma/client'

type FeatureProps = {
  title: string
  description: string
}

export const createFeature = async ({ title, description} : FeatureProps) => {
  try {
    const prisma = new PrismaClient();

    const createdFeatureData = await prisma.featureData.create({
      data: {
        title: title,
        description: description
      }
    })

  }catch(error){
    console.log(error)
  }
}