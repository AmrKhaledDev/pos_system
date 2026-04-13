"use server";
import { signIn } from "@/auth";
import { sendVerificationToken } from "@/lib/email_send/sendVerificationToken";
import { generateVerificationToken } from "@/lib/generateVerificationToken";
import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/lib/Zod/Auth/LoginSchema";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import z from "zod";
// ==================================
export const LoginAction = async (
  data: z.infer<typeof LoginSchema>,
): Promise<{ success: boolean; message: string }> => {
  try {
    const validation = LoginSchema.safeParse(data);
    if (!validation.success)
      return { success: false, message: validation.error.issues[0].message };
    const user = await prisma.user.findUnique({
      where: {
        email: validation.data.email,
      },
    });
    if (!user || !user.password || !user.email)
      return {
        success: false,
        message: "هذا الحساب غير موجود ربما تحتاج لانشاء حساب",
      };
    const passwordMatch = await bcrypt.compare(
      validation.data.password,
      user.password,
    );
    if (!passwordMatch)
      return { success: false, message: "كلمة السر غير صحيحة" };
    if (!user.emailVerified) {
      const verificationToken = await generateVerificationToken(user.email);
      if (verificationToken.error)
        return { success: false, message: verificationToken.error };
      const result = await sendVerificationToken(
        validation.data.email,
        verificationToken.token!,
      );
      if (!result.success) return { success: false, message: result.message };
      return { success: true, message: result.message };
    }
    await signIn("credentials", {
      email: validation.data.email,
      password: validation.data.password,
    });
    return { success: true, message: "تم تسجيل الدخول بنجاح" };
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { success: false, message: error.message };
      }
    }
    return {
      success: false,
      message: "حدث خطأ أثناء تسجيل دخولك حاول مرة أخرى",
    };
  }
};
