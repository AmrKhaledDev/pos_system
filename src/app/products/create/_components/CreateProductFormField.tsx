"use client";

import { Dispatch, SetStateAction } from "react";
// =========================================================
function CreateProductFormField({
  placeholder,
  type,
  value,
  onChange,
}: {
  placeholder: string;
  type: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}) {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      value={value}
      type={type}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-orange-400 transition-all text-right"
    />
  );
}

export default CreateProductFormField;
