"use server";
import { sendVerificationToken } from "@/lib/email_send/sendVerificationToken";
import { generateVerificationToken } from "@/lib/generateVerificationToken";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/Zod/Auth/RegisterSchema";
import bcrypt from "bcryptjs";
import z from "zod";
// ===================================
export const RegisterAction = async (
  data: z.infer<typeof RegisterSchema>,
): Promise<{ success: boolean; message: string }> => {
  try {
    const validation = RegisterSchema.safeParse(data);
    if (!validation.success)
      return { success: false, message: validation.error.issues[0].message };
    const userExists = await prisma.user.findUnique({
      where: {
        email: validation.data.email,
      },
    });
    if (userExists)
      return { success: false, message: "هذا البريد الإلكتروني مسجل مسبقاً" };
    const hashedPassword = await bcrypt.hash(validation.data.password, 12);
    const result = await prisma.$transaction(async (tx) => {
      await tx.user.create({
        data: {
          email: validation.data.email,
          password: hashedPassword,
          name: validation.data.name,
        },
      });
      const verificationToken = await generateVerificationToken(
        validation.data.email,
      );
      if (verificationToken.error) throw new Error(verificationToken.error);
      return { token: verificationToken.token! };
    });
    const emailResult = await sendVerificationToken(
      validation.data.email,
      result.token!,
    );
    if (!emailResult.success)
      return { success: false, message: emailResult.message };
    return { success: true, message: emailResult.message };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "حدث خطأ أثناء انشاء حسابك حاول مرة أخرى",
    };
  }
};
