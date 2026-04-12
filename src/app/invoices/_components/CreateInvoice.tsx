"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CreateInvoiceHead from "./CreateInvoiceHead";
import { MdAdd } from "react-icons/md";
import Customers from "./Customers";
import Items from "./Items";
import { ItemType } from "@/lib/types/ItemType";
import { formatCurrency } from "@/lib/FormatCurrency";
import { motion } from "framer-motion";
// ==========================================================
interface Customer {
  id: string;
  name: string;
}
function CreateInvoice({
  setShowCreateInvoice,
}: {
  setShowCreateInvoice: Dispatch<SetStateAction<boolean>>;
}) {
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState(40);
  const [showCustomers, setShowCustomers] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [items, setItems] = useState<ItemType[]>([
    { product: { id: "", name: "" }, quantity: 1, price: "" },
  ]);
  const customers = [
    { id: "1", name: "Amr Khaled" },
    { id: "2", name: "Mohammed Khaled" },
    { id: "3", name: "Yaser Ahmed" },
    { id: "4", name: "Taha Yaser" },
  ];
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest(".boxCustomers, .button"))
          setShowCustomers(false);
      }
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);
  const totalProductsPrice = items.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0,
  );
  const total_price = totalProductsPrice - Number(discount);
  return (
    <div className="fixed h-screen inset-0 bg-black/25 backdrop-blur flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg w-150 p-3 flex flex-col gap-3"
      >
        <CreateInvoiceHead setShowCreateInvoice={setShowCreateInvoice} />
        <Customers
          customer={customer}
          setCustomer={setCustomer}
          setShowCustomers={setShowCustomers}
          customers={customers}
          showCustomers={showCustomers}
        />
        <h2>العناصر</h2>
        <Items items={items} setItems={setItems} />
        <button
          onClick={() => {
            if (items.length >= 5) return;
            setItems((prev: any) => [
              ...prev,
              { product: { id: "", name: "" }, quantity: 1, price: "" },
            ]);
          }}
          className="flex items-center gap-2 text-sm cursor-pointer text-white font-bold rounded hover:scale-103 active:scale-95 transition-css bg-yellow-600 py-2 px-6 w-fit"
        >
          انشاء عنصر <MdAdd className="size-5" />
        </button>
        <div className="flex items-center gap-5">
          <div className="space-y-1">
            <h3>الخصم</h3>
            <input
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              type="number"
              className="border border-slate-300 outline-none rounded-md px-2 py-1.5"
            />
          </div>
          <div className="space-y-1">
            <h3>الضريبة</h3>
            <input
              value={tax}
              onChange={(e) => setTax(Number(e.target.value))}
              type="number"
              className="border border-slate-300 outline-none rounded-md px-2 py-1.5"
            />
          </div>
        </div>
        <button className="text-white cursor-pointer bg-green-600 rounded-md py-3 px-6 hover:bg-green-500 mt-5 transition-css active:scale-95">
          حفظ الفاتورة
          <span className="mr-2 font-bold">
            {formatCurrency(total_price > 0 ? total_price + tax : 0)}
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default CreateInvoice;
