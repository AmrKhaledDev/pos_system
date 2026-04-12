"use client";
"use client";
import AuthFormField from "@/components/AuthFormField/AuthFormField";
import { motion } from "framer-motion";
import { HiOutlineLockClosed  } from "react-icons/hi2";
import { RiUser6Line } from "react-icons/ri";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import AuthButtonSubmit from "@/components/AuthButtonSubmit/AuthButtonSubmit";
import OrDivider from "@/components/OrDivider/OrDivider";
import ButtonAuthWithGoogle from "@/components/ButtonAuthWithGoogle/ButtonAuthWithGoogle";
import { MdOutlineMail } from "react-icons/md";
// =============================================================================================
function LoginContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-7 h-fit rounded-xl shadow-2xl w-110 ring ring-slate-200 flex flex-col gap-7"
    >
      <AuthHeader icon={HiOutlineLockClosed} title="تسجيل الدخول إلى حسابك" />
      <form action="" className="flex flex-col gap-3">
        <AuthFormField
          label="البريد الإلكتروني"
          id="email"
          icon={RiUser6Line}
          type="email"
          placeholder="example@gmail.com"
        />
        <AuthFormField
          label="كلمة السر"
          id="password"
          icon={MdOutlineMail}
          type="password"
          placeholder="********"
        />
        <AuthButtonSubmit buttonTxt="تسجيل الدخول" />
        <OrDivider />
        <ButtonAuthWithGoogle />
      </form>
    </motion.div>
  );
}

export default LoginContent;
