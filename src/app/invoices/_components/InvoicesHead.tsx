"use client";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import CreateInvoice from "./CreateInvoice";
// ============================================================
function InvoicesHead() {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <SectionHeader
          title="الفواتير"
          icon={<RiMoneyDollarBoxLine className="section-icon" />}
        />
        <button
          onClick={() => setShowCreateInvoice(true)}
          className="flex items-center gap-2 text-white font-bold cursor-pointer bg-yellow-600 shadow py-3 hover:scale-103 transition-css active:scale-95 px-6 rounded-lg text-sm"
        >
          إنشاء فاتورة <MdAdd className="size-5" />
        </button>
      </div>
      {showCreateInvoice && (
        <CreateInvoice setShowCreateInvoice={setShowCreateInvoice} />
      )}
    </>
  );
}

export default InvoicesHead;
