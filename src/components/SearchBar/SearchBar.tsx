"use client";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
// =============================================
function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-1/2 focus-within:w-full transition-css h-11 gap-3 flex items-center rounded-lg bg-white shadow"
    >
      <button className="text-xl text-slate-500 text-shadow-2xs pr-3">
        <FiSearch />
      </button>
      <span className="h-6 w-[0.5px] block bg-slate-100" />
      <input
        placeholder={placeholder}
        className="block cursor-pointer font-semibold flex-1 outline-none h-full"
      />
    </motion.div>
  );
}

export default SearchBar;
