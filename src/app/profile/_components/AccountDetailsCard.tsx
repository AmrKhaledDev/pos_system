import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { RiKeyLine } from "react-icons/ri";
// ==============================================
function AccountDetailsCard() {
  return (
    <div className="bg-white p-5 rounded-md shadow w-200 flex flex-col gap-3">
      <h2 className="text-2xl text-yellow-600 font-semibold">تفاصيل الحساب</h2>
      <span className="w-full h-0.5 bg-slate-100 block" />
      <p className="flex items-center gap-1">
        <RiKeyLine className="text-yellow-600 size-4.5" /> كلمة السر: **********
        <button className="mr-3 text-white bg-linear-to-r from-yellow-500 shadow to-yellow-600 px-6 py-2 cursor-pointer font-bold text-xs rounded hover:scale-102 transition-css">
          تغيير كلمة السر
        </button>
      </p>
      <p className="flex items-center gap-1">
        <FiUser className="text-yellow-600 size-4.5" /> الدور:
        <span className="text-green-500 font-bold">كاشير</span>
      </p>
      <p className="flex items-center gap-1">
        <MdOutlineDateRange className="text-yellow-600 size-4.5" /> تم انشاء
        الحساب في: 1/12/2025
      </p>
    </div>
  );
}

export default AccountDetailsCard;
