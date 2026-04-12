import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange, MdOutlineMailOutline } from "react-icons/md";
// =========================================================================
function UserProfileCard() {
  return (
    <div className="bg-white p-5 rounded-md shadow flex items-center gap-7 w-200">
      <FiUser className="size-25 p-4 rounded-full text-white bg-yellow-600 ring-4 ring-yellow-300" />
      <div className="flex flex-col  gap-3">
        <h2 className="text-5xl font-bold text-yellow-600">عمرو خالد</h2>
        <h4 className="bg-green-500 shadow text-white rounded-full py-1.5 px-2 w-full text-center font-semibold uppercase text-[17px]">
          كاشير
        </h4>
        <p className="flex items-center gap-1 font-semibold text-slate-600">
          <MdOutlineMailOutline className="text-yellow-600 size-4.5" />
          amr@gmail.com
        </p>
        <p className="flex items-center gap-1 font-semibold text-slate-600 text-sm">
          <MdOutlineDateRange className="text-yellow-600 size-4.5" /> تم التسجيل
          في: <span className="text-[15px]">1/12/2025</span>
        </p>
      </div>
    </div>
  );
}

export default UserProfileCard;
