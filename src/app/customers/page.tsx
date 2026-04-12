import SearchBar from "@/components/SearchBar/SearchBar";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { TbUsersGroup } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
// ====================================================
function Customers() {
  const customers = [
    { id: "1", name: "Amr Khaled", email: "maro.vip53@gmail.com" },
    { id: "2", name: "Mohammed Yaser", email: "mohammedyaser12@gmail.com" },
    { id: "3", name: "Ahmed Moatz", email: "ahmedmoatz342@gmail.com" },
  ];
  return (
    <main className="section-p">
      <div className="container-css section-space">
        <SectionHeader
          title="العملاء"
          icon={<TbUsersGroup className="section-icon" />}
        />
        <SearchBar placeholder="ابحث عن عميل" />
        <ul className="grid grid-cols-3 gap-5">
          {customers.map((customer) => (
            <li
              key={customer.id}
              className="rounded-md p-4 bg-white hover:scale-105 transition-css  ring ring-slate-200 space-y-3 shadow-md" 
            >
              <div className="flex items-center gap-3">
                <FaRegUser className="p-2 size-8 ring ring-yellow-100 bg-gray-50 rounded-md text-yellow-500" />
                <h2 className="font-semibold text-[17px]">{customer.name}</h2>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMailOutline className="size-4  text-yellow-500" />
                <p className="text-xs text-gray-500">{customer.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Customers;
