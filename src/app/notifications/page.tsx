import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { IoNotifications } from "react-icons/io5";
// ==================================================
function Notifications() {
  return (
    <main className="section-p">
      <div className="container-css">
        <SectionHeader title="الإشعارات" icon={<IoNotifications className="section-icon"/>} />
        <p className="text-slate-400 mt-8"> لا يوجد إشعارات حالياً</p>
      </div>
    </main>
  );
}

export default Notifications;
