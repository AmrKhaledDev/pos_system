import z from "zod";
// ================================================================
export const RegisterSchema = z.object({
  name: z
    .string({message:"الاسم مطلوب"})
    .min(2, { message: "الاسم يجب ألا يقل عن حرفين" })
    .nonempty({ message: "الاسم مطلوب" })
    .max(50, { message: "الاسم طويل للغاية يجب ألا يزيد عن 50 حرف" }),
  email: z
    .string({ message: "البريد الالكتروني يجب أن يكون نص" })
    .email({ message: "برجاء كتابة بريد الكتروني صالح" })
    .nonempty({ message: "البريد الالكتروني مطلوب" }),
  password: z
    .string()
    .min(8, { message: "كلمة السر يجب ألا تقل عن 8  حروف / أرقام" })
    .nonempty({ message: "كلمة السر مطلوبة" }),
});
