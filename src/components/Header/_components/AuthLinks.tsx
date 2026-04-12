import Link from "next/link";
// ============================
function AuthLinks() {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <Link href={"/login"} className="font-semibold hover:-translate-y-1 transition-css block">تسجيل الدخول</Link>
      </li>
      <li>
        <Link
          href={"/register"}
          className="py-2 px-4 rounded-full bg-linear-to-r from-orange-400 to-orange-600 text-white shadow-2xl shadow-orange-400 font-bold hover:scale-105 transition-css block"
        >
          إنشاء حساب
        </Link>
      </li>
    </ul>
  );
}

export default AuthLinks;
