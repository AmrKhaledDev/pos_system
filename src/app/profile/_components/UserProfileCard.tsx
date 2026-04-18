import { User } from "@prisma/client";
import { FiUser } from "react-icons/fi";
import { MdOutlineDateRange, MdOutlineMailOutline } from "react-icons/md";
import dayjs from "dayjs";
// =========================================================================
function UserProfileCard({ user }: { user: User }) {
  return (
    <div className="bg-white p-5 rounded-md shadow flex items-center gap-7 w-200">
      <FiUser className="size-25 p-4 rounded-full text-white bg-yellow-600 ring-4 ring-yellow-300" />
      <div className="flex flex-col  gap-3">
        <h2 className="text-5xl font-bold text-yellow-600">{user.name}</h2>
        <h4
          className={` shadow text-white rounded-full py-1.5 px-2 w-full text-center font-semibold uppercase text-[17px] 
          ${user.role === "مستخدم" && "bg-indigo-500"}
          ${user.role === "مسؤول" && "bg-red-500"}
          ${user.role === "كاشير" && "bg-green-500"}
          `}
        >
          {user.role}
        </h4>
        <p className="flex items-center gap-1 font-semibold text-slate-600">
          <MdOutlineMailOutline className="text-yellow-600 size-4.5" />
          {user.email}
        </p>
        <p className="flex items-center gap-1 font-semibold text-slate-600 text-sm">
          <MdOutlineDateRange className="text-yellow-600 size-4.5" /> تم التسجيل
          في:{" "}
          <span className="text-[15px]">
            {dayjs(user.createdAt).format("D/M/YYYY")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default UserProfileCard;
