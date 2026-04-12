"use client";
"use client";
import AuthFormField from "@/components/AuthFormField/AuthFormField";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineLockClosed } from "react-icons/hi";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import AuthButtonSubmit from "@/components/AuthButtonSubmit/AuthButtonSubmit";
import OrDivider from "@/components/OrDivider/OrDivider";
import ButtonAuthWithGoogle from "@/components/ButtonAuthWithGoogle/ButtonAuthWithGoogle";
import { MdOutlineMail } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
// =============================================================================================
function RegisterContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-7 h-fit rounded-xl shadow-2xl w-110 ring ring-slate-200 flex flex-col gap-7"
    >
      <AuthHeader icon={FaRegUser} title="أنشئ حسابك وابدأ الآن" />
      <form action="" className="flex flex-col gap-3">
        <AuthFormField
          label="الاسم الكامل"
          id="fullName"
          icon={RiUser6Line}
          type="text"
          placeholder="اكتب اسمك الكامل"
        />
        <AuthFormField
          label="البريد الإلكتروني"
          id="email"
          icon={MdOutlineMail}
          type="email"
          placeholder="example@gmail.com"
        />
        <AuthFormField
          label="كلمة السر"
          id="password"
          icon={HiOutlineLockClosed}
          type="password"
          placeholder="********"
        />
        <AuthButtonSubmit buttonTxt="تسجيل" />
        <OrDivider />
        <ButtonAuthWithGoogle />
      </form>
    </motion.div>
  );
}

export default RegisterContent;
