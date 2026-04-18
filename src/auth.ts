import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/Zod/Auth/LoginSchema";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
//  ===================================================================
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(data) {
        try {
          const validation = LoginSchema.safeParse(data);
          if (!validation.success) return null;
          const user = await prisma.user.findUnique({
            where: {
              email: validation.data.email,
            },
          });
          if (!user || !user.password) return null;
          const passwordCheck = await bcrypt.compare(
            validation.data.password,
            user.password,
          );
          if (!passwordCheck) return null;
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
