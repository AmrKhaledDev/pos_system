"use client";

import { Dispatch, ElementType, SetStateAction } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
// =============================================================
interface AuthFormFieldProps {
  label: string;
  placeholder: string;
  id: string;
  icon: ElementType;
  type: "password" | "email" | "text";
  onChange: Dispatch<SetStateAction<string>>;
  value: string;
  error?: string;
  disabled: boolean;
}
function AuthFormField({
  label,
  placeholder,
  id,
  icon: Icon,
  type,
  onChange,
  value,
  error,
  disabled,
}: AuthFormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <div
        className={`w-full h-11 border rounded-md relative overflow-hidden  transition-css ${error ? "bg-red-400 text-white border-red-400" : "border-slate-300 focus-within:border-slate-400"}`}
      >
        <input
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full h-full pr-12 outline-none text-sm"
        />
        <Icon className="absolute top-1/2 right-2 -translate-y-1/2 text-yellow-500 bg-yellow-100 shadow p-1 rounded-md size-7" />
      </div>
      {error && <p className="text-red-500 text-sm flex items-center gap-1 font-semibold"><MdOutlineReportGmailerrorred className="size-5"/> {error}</p>}
    </div>
  );
}

export default AuthFormField;
