"use client";

import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdRadioButtonChecked } from "react-icons/md";
// ===========================================================================
interface Customer {
  id: string;
  name: string;
}
function Customers({
  setShowCustomers,
  customer,
  showCustomers,
  customers,
  setCustomer,
}: {
  setShowCustomers: Dispatch<SetStateAction<boolean>>;
  customer: Customer | null;
  showCustomers: boolean;
  customers: Customer[];
  setCustomer: Dispatch<SetStateAction<null | Customer>>;
}) {
  return (
    <div className="space-y-1">
      <h2>اختر عميل</h2>
      <div className="relative">
        <button
          onClick={() => setShowCustomers(true)}
          className="border button flex w-full items-center justify-between px-2 py-1.5 cursor-pointer rounded-lg border-slate-300 "
        >
          <h2 className={`text-slate-400 text-sm font-semibold ${customer && "text-slate-600"}`}>
            {customer ? `العميل : ${customer.name} ` : "لم يتم اختيار عميل"}
          </h2>
          <IoIosArrowDown className="text-slate-400" />
        </button>
        {showCustomers && (
          <div className="bg-[#ccccca] boxCustomers absolute shadow -bottom-26 -left-26 z-10 w-full flex flex-col gap-2  p-2 rounded-md font-semibold">
            {customers.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setCustomer(c);
                  setShowCustomers(false);
                }}
                className={`hover:bg-[#287DF4] flex items-center gap-4 hover:text-white w-full text-start px-2 rounded ${customer?.id === c.id && "text-white bg-[#287DF4]"}`}
              >
                {customer?.id === c.id && <MdRadioButtonChecked />}
                {c.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Customers;
