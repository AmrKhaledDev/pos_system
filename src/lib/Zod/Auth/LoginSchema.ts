import z, { email } from "zod";
// ================================================================
export const LoginSchema = z.object({
  email: z
    .string({ message: "البريد الالكتروني يجب أن يكون نص" })
    .email({ message: "برجاء كتابة بريد الكتروني صالح" })
    .nonempty({ message: "البريد الالكتروني مطلوب" }),
  password: z
    .string()
    .min(8, { message: "كلمة السر يجب ألا تقل عن 8  حروف / أرقام" })
    .nonempty({ message: "كلمة السر مطلوبة" }),
});
