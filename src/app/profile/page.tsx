import UserProfileCard from "./_components/UserProfileCard";
import AccountDetailsCard from "./_components/AccountDetailsCard";
// =======================================
function Profile() {
  return (
    <main className="section-p flex justify-center">
      <div className="container-css space-y-4">
       <UserProfileCard/>
      <AccountDetailsCard/>
      </div>
    </main>
  );
}

export default Profile;
