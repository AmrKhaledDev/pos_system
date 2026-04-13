"use client";
import AuthFormField from "@/components/AuthFormField/AuthFormField";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import AuthHeader from "@/components/AuthHeader/AuthHeader";
import AuthButtonSubmit from "@/components/AuthButtonSubmit/AuthButtonSubmit";
import OrDivider from "@/components/OrDivider/OrDivider";
import ButtonAuthWithGoogle from "@/components/ButtonAuthWithGoogle/ButtonAuthWithGoogle";
import { MdOutlineMail } from "react-icons/md";
import { RiUser6Line } from "react-icons/ri";
import { FormEvent, useState } from "react";
import { RegisterSchema } from "@/lib/Zod/Auth/RegisterSchema";
import { RegisterAction } from "@/lib/Server/Auth/Register.action";
// =============================================================================================
interface InputsErrors {
  name?: string;
  email?: string;
  password?: string;
}
function RegisterContent() {
  const [name, setName] = useState("");
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
      const validation = RegisterSchema.safeParse({
        email,
        password,
      });
      if (!validation.success) {
        const newError: InputsErrors = {};
        validation.error.issues.forEach((error) => {
          switch (error.path[0]) {
            case "name":
              newError.name = error.message;
              break;
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
      const result = await RegisterAction({
        name,
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
      className="bg-white p-7 h-fit rounded-xl shadow-2xl w-110 ring ring-slate-200 flex flex-col gap-7"
    >
      <AuthHeader icon={FaRegUser} title="أنشئ حسابك وابدأ الآن" />
      <form action="" className="flex flex-col gap-3">
        {error && (
          <p className="text-white bg-red-400 p-1 font-semibold text-sm">
            {error}
          </p>
        )}
        <AuthFormField
          label="الاسم الكامل"
          id="fullName"
          icon={RiUser6Line}
          type="text"
          placeholder="اكتب اسمك الكامل"
          value={name}
          onChange={setName}
          error={inputErrors.name}
          disabled={loading}
        />
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
          buttonTxtLoading="جاري انشاء حسابك . . ."
          buttonTxt="تسجيل"
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
    </motion.div>
  );
}

export default RegisterContent;
