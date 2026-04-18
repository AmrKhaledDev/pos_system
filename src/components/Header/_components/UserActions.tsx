"use client";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { RiNotificationLine } from "react-icons/ri";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
// =====================================================
function UserActions() {
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
    } catch (error) {
      console.log(error);
      toast.error("فشل تسجيل خروجك حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center gap-3">
      <button className="relative text-[22px] text-orange-400">
        <RiNotificationLine />
        <span className="size-2 rounded-full absolute top-0 right-0 bg-red-600" />
      </button>
      <Link href={"/profile"} className="text-[22px] text-orange-400">
        <FiUser />
      </Link>
      <button
        disabled={loading}
        onClick={handleSignOut}
        className={`bg-linear-to-r from-orange-400 to-orange-600 text-white py-1.5 cursor-pointer hover:scale-103 transition-css active:scale-95 px-5 rounded-full font-semibold text-sm disabled:cursor-default disabled:to-gray-200 disabled:from-gray-200 disabled:text-gray-400 shadow `}
      >
       {loading ? <div className="size-4 border-2 rounded-full border-t-transparent animate-spin"/> :" خروج"}
      </button>
    </div>
  );
}

export default UserActions;
