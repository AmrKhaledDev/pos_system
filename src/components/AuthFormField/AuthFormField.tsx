"use client";

import { ElementType } from "react";
// =============================================================
interface AuthFormFieldProps {
  label: string;
  placeholder: string;
  id: string;
  icon: ElementType;
  type: "password" | "email" | "text";
}
function AuthFormField({
  label,
  placeholder,
  id,
  icon: Icon,
  type,
}: AuthFormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <div className="w-full h-11 border border-slate-300 rounded-md relative overflow-hidden focus-within:border-slate-400 transition-css">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full h-full pr-12 outline-none text-sm"
        />
        <Icon className="absolute top-1/2 right-2 -translate-y-1/2 text-yellow-500 bg-yellow-100 shadow p-1 rounded-md size-7" />
      </div>
    </div>
  );
}

export default AuthFormField;
