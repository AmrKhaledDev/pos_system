"use server";

import { auth } from "@/auth";
import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";
// ============================================================
const GetUserSession = async (): Promise<User | null> => {
  try {
    const session = await auth();
    if (session && session.user?.id) {
      const user = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
      });
      return user || null;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default GetUserSession;
