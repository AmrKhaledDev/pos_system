"use client";
import { signIn } from "next-auth/react";
import { Dispatch, SetStateAction } from "react";
import { FcGoogle } from "react-icons/fc";
// ==================================
function ButtonAuthWithGoogle({
  disabled,
  loadingAuthO,
  setLoadingAuthO,
  setError,
}: {
  disabled: boolean;
  loadingAuthO: boolean;
  setLoadingAuthO: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
}) {
  const handleSignInWithGoogle = async () => {
    setLoadingAuthO(true);
    await signIn("google", { redirectTo: "/" });
    setLoadingAuthO(false);
  };
  return (
    <button
      onClick={handleSignInWithGoogle}
      disabled={disabled}
      type="button"
      className={`flex items-center font-semibold  transition-css  gap-2 w-full justify-center border py-2 px-4 rounded-lg border-slate-200 ${loadingAuthO ? "bg-gray-100 text-gray-500 cursor-default" : "text-slate-600 cursor-pointer hover:text-slate-900 hover:shadow"}`}
    >
      سجل بواسطة جوجل
      {loadingAuthO ? (
        <div className="size-4 rounded-full border-y-2 animate-spin border-blue-400 flex items-center justify-center">
          <span className="size-1 rounded-full bg-blue-400 block" />
        </div>
      ) : (
        <FcGoogle className="size-6" />
      )}
    </button>
  );
}

export default ButtonAuthWithGoogle;
