"use server";
import { prisma } from "@/lib/prisma";
import { createHash, randomUUID } from "node:crypto";
// =========================================================
export const generateVerificationToken = async (
  email: string,
): Promise<{ error?: string; token?: string }> => {
  try {
    if (!email) {
      return { error: "البريد الإلكتروني مطلوب" };
    }
    const token = randomUUID();
    const hashedToken = createHash("sha256").update(token).digest("hex");
    const expires = new Date(Date.now() + 10 * 60 * 1000);
    await prisma.$transaction([
      prisma.verificationToken.deleteMany({
        where: { identifier: email },
      }),
      prisma.verificationToken.create({
        data: {
          token: hashedToken,
          identifier: email,
          expires,
        },
      }),
    ]);

    return { token };
  } catch (error) {
    console.error("Verification Token Error:", error);
    return { error: "حدث خطأ غير متوقع، يرجى المحاولة لاحقاً" };
  }
};