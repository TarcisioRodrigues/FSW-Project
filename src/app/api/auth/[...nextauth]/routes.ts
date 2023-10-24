import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import { prismaClient } from "@/src/lib/prisma"
import { authOptions } from "@/src/lib/auth"



const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }