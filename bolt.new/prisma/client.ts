 import { PrismaClient } from '@prisma/client'

 export const prismaClient = () => {
   const prisma = new PrismaClient();

   return prisma;
 }
