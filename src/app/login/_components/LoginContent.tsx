"use client";
import AuthFormField from "@/components/AuthFormField/AuthFormField";
import { motion } from "framer-motion";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { RiUser6Line } from "react-icons/ri";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import AuthButtonSubmit from "@/components/AuthButtonSubmit/AuthButtonSubmit";
import OrDivider from "@/components/OrDivider/OrDivider";
import ButtonAuthWithGoogle from "@/components/ButtonAuthWithGoogle/ButtonAuthWithGoogle";
import { MdOutlineMail } from "react-icons/md";
import { FormEvent, useState } from "react";
import { LoginSchema } from "@/lib/Zod/Auth/LoginSchema";
import { LoginAction } from "@/lib/Server/Auth/Login.action";
import Blur from "@/components/Blur/Blur";
// =============================================================================================
interface InputsErrors {
  email?: string;
  password?: string;
}
function LoginContent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputErrors, setInputErrors] = useState<InputsErrors>({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingAuthO, setLoadingAuthO] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setSuccess("");
      setError("");
      setInputErrors({});
      const validation = LoginSchema.safeParse({
        email,
        password,
      });
      if (!validation.success) {
        const newError: InputsErrors = {};
        validation.error.issues.forEach((error) => {
          switch (error.path[0]) {
            case "email":
              newError.email = error.message;
              break;
            case "password":
              newError.password = error.message;
              break;
          }
        });
        setInputErrors(newError);
        return;
      }
      const result = await LoginAction({
        email,
        password,
      });
      if (!result.success) return setError(result.message);
      setEmail("");
      setPassword("");
      setSuccess(result.message);
    } catch (error) {
      console.log(error);
      return setError("حدث خطأ أثناء تسجيل دخولك حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-7 h-fit rounded-xl shadow-2xl w-110 ring ring-slate-200 flex flex-col gap-7 relative overflow-hidden"
    >
      <AuthHeader icon={HiOutlineLockClosed} title="تسجيل الدخول إلى حسابك" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {error && <p className="text-white bg-red-400 p-1 font-semibold text-sm">{error}</p>}
        <AuthFormField
          label="البريد الإلكتروني"
          id="email"
          icon={RiUser6Line}
          type="email"
          placeholder="example@gmail.com"
          onChange={setEmail}
          value={email}
          error={inputErrors.email}
          disabled={loading}
        />
        <AuthFormField
          label="كلمة السر"
          id="password"
          icon={MdOutlineMail}
          type="password"
          placeholder="********"
          onChange={setPassword}
          value={password}
          error={inputErrors.password}
          disabled={loading}
        />
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <AuthButtonSubmit
          buttonTxtLoading="جاري تسجيل الدخول . . ."
          buttonTxt="تسجيل الدخول"
          disabled={loading || loadingAuthO}
          loading={loading}
        />
        <OrDivider />
        <ButtonAuthWithGoogle
          setLoadingAuthO={setLoadingAuthO}
          loadingAuthO={loadingAuthO}
          disabled={loading}
        />
      </form>
      {(loading || loadingAuthO) && <Blur />}
    </motion.div>
  );
}

export default LoginContent;