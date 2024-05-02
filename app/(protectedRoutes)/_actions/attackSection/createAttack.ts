"use server"

import { PrismaClient } from '@prisma/client'

export const createAttack = async ({ navtitle, description } : { navtitle: string , description: string }) => {
  try {
    const prisma = new PrismaClient();
    const createdAttack = await prisma.attackData.create({
      data: {
        navtitle: navtitle,
        description: description
      }
    })
    console.log("Created Attack", createdAttack)
  } catch (error) {
    console.log(error)
  }
}