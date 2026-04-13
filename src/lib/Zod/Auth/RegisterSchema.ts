import z from "zod";
// ================================================================
export const RegisterSchema = z.object({
  name: z
    .string({ message: "الاسم يجب أن يكون نص" })
    .nonempty({ message: "الاسم مطلوب" })
    .min(2, { message: "الاسم يجب ألا يقل عن حرفين" })
    .max(50, { message: "الاسم طويل للغاية يجب ألا يزيد عن 50 حرف" }),
  email: z
    .string({ message: "البريد الالكتروني يجب أن يكون نص" })
    .email({ message: "برجاء كتابة بريد الكتروني صالح" })
    .nonempty({ message: "البريد الالكتروني مطلوب" }),
  password: z
    .string()
    .nonempty({ message: "كلمة السر مطلوبة" })
    .min(8, { message: "كلمة السر يجب ألا تقل عن 8  حروف / أرقام" }),
});
