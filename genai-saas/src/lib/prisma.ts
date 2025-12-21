// prismaClient is nothing but a way through which we can communicate to the database
// below code is something where we have creeated our prismaClient as a global variable so that we can use it from anywhere


import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"],
    //adapter: require("@prisma/adapter-node")(),
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;