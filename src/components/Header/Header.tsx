import Link from "next/link";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Nav from "./_components/Nav";
import GetUserSession from "@/lib/GetUserSession";
import UserActions from "./_components/UserActions";
import AuthLinks from "./_components/AuthLinks";
// ===========================================================
async function Header() {
  const userSession = await GetUserSession();
  return (
    <header className="bg-[#F6F4F0] px-4 shadow text-slate-800">
      <div className="container-css flex items-center justify-between">
        <Link
          href={"/"}
          className="flex gap-1.5 items-center font-extrabold text-2xl"
        >
          Pos System
          <MdOutlineRocketLaunch className="text-yellow-500 size-9" />
        </Link>
        <div className="flex items-center gap-8">
          <Nav />
          {userSession ? <UserActions /> : <AuthLinks />}
        </div>
      </div>
    </header>
  );
}

export default Header;
