import UserProfileCard from "./_components/UserProfileCard";
import AccountDetailsCard from "./_components/AccountDetailsCard";
import GetUserSession from "@/lib/GetUserSession";
import { redirect } from "next/navigation";
// =======================================
async function Profile() {
  const userSession = await GetUserSession();
  if (!userSession) return redirect("/login");
  return (
    <main className="section-p flex justify-center">
      <div className="container-css space-y-4">
        <UserProfileCard user={userSession} />
        <AccountDetailsCard user={userSession}/>
      </div>
    </main>
  );
}

export default Profile;
