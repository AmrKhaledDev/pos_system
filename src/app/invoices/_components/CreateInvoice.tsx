"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CreateInvoiceHead from "./CreateInvoiceHead";
import { MdAdd } from "react-icons/md";
import Customers from "./Customers";
import Items from "./Items";
import { ItemType } from "@/lib/types/ItemType";
import { formatCurrency } from "@/lib/FormatCurrency";
import { motion } from "framer-motion";
import { Customer, Product } from "@prisma/client";
import { toast } from "react-toastify";
import { CreateInvoiceAction } from "@/lib/Server/Create/CreateInvoice.action";
// ==========================================================
function CreateInvoice({
  setShowCreateInvoice,
  products,
  customers,
}: {
  setShowCreateInvoice: Dispatch<SetStateAction<boolean>>;
  products: Product[];
  customers: Customer[];
}) {
  const [loading, setLoading] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(40);
  const [showCustomers, setShowCustomers] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [items, setItems] = useState<ItemType[]>([
    {
      id: crypto.randomUUID(),
      product: { id: "", name: "" },
      quantity: 1,
      price: "",
    },
  ]);
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
  const total_price = totalProductsPrice - Number(discount) + tax;
  console.log(items);
  const handleCreateInvoice = async () => {
    try {
      setLoading(true);
      const filteredItems = items.filter(
        (p) => p.id && typeof Number(p.price) === "number" && p.quantity > 0,
      );
      if (filteredItems.length === 0)
        return toast.error("لا يوجد منتجات صالحة", { className: "toast" });
      const result = await CreateInvoiceAction(items, tax, discount, customer);
      if (!result.success)
        return toast.error(result.message, { className: "toast" });
      setCustomer(null);
      setItems([
        {
          id: crypto.randomUUID(),
          product: { id: "", name: "" },
          quantity: 1,
          price: "",
        },
      ]);
      toast.success(result.message, { className: "toast" });
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ أثناء انشاء فاتورة جديدة حاول مرة أخرى", {
        className: "toast",
      });
    } finally {
      setLoading(false);
    }
  };
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
        <Items items={items} setItems={setItems} products={products} />
        <button
          onClick={() => {
            if (items.length >= 5) return;
            setItems((prev: any) => [
              ...prev,
              {
                id: crypto.randomUUID(),
                product: { id: "", name: "" },
                quantity: 1,
                price: "",
              },
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
              onChange={(e) => setDiscount(Number(e.target.value))}
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
        <button
          onClick={handleCreateInvoice}
          disabled={loading}
          className={`rounded-md py-3 px-6 mt-5 transition-css 
            ${loading ? "text-gray-400 bg-gray-200" : "text-white bg-green-600 hover:bg-green-500 cursor-pointer active:scale-95 "}`}
        >
          {loading ? "جاري انشاء الفاتورة . . ." : " انشاء فاتورة"}
          <span className="mr-2 font-bold">
            {formatCurrency(total_price > 0 ? total_price : 0)}
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default CreateInvoice;
