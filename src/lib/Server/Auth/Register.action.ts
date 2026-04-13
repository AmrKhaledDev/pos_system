"use server";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/Zod/Auth/RegisterSchema";
import z from "zod";
// ===================================
export const RegisterAction = async (
  data: z.infer<typeof RegisterSchema>,
): Promise<{ success: boolean; message: string }> => {
  try {
    
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "حدث خطأ أثناء انشاء حسابك حاول مرة أخرى",
    };
  }
};
