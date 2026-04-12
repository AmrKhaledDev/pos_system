import { FcGoogle } from "react-icons/fc";
// ==================================
function ButtonAuthWithGoogle() {
  return (
    <button
      type="button"
      className="flex items-center font-semibold text-slate-600 hover:text-slate-900 transition-css hover:shadow gap-2 w-full justify-center border py-2 px-4 rounded-lg border-slate-200 cursor-pointer"
    >
      سجل بواسطة جوجل
      <FcGoogle className="size-6" />
    </button>
  );
}

export default ButtonAuthWithGoogle;
