"use client";
import Link from "next/link";
import { FiDollarSign } from "react-icons/fi";
import { formatCurrency } from "@/lib/FormatCurrency";
import InvoicesHead from "./_components/InvoicesHead";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import SearchBar from "@/components/SearchBar/SearchBar";
// ===========================================================
function Invoices() {
  const invoices = [
    {
      id: 1,
      customer: "أحمد محمد",
      items: [
        { name: "شاحن هاتف", price: 20 },
        { name: "سماعات", price: 30 },
      ],
      total_price: 50,
      invoice_number: 1001,
    },
    {
      id: 2,
      customer: "", // بدون عميل (N/A)
      items: [{ name: "كابل USB", price: 10 }],
      total_price: 10,
      invoice_number: 1002,
    },
    {
      id: 3,
      customer: "سارة محمود",
      items: [], // عميل موجود لكن الفاتورة فارغة من العناصر
      total_price: 0,
      invoice_number: 1003,
    },
    {
      id: 4,
      customer: "", // لا يوجد عميل ولا يوجد عناصر
      items: [],
      total_price: 0,
      invoice_number: 1004,
    },
    {
      id: 5,
      customer: "شركة التقنية الحديثة",
      items: [{ name: "شاشة 24 بوصة", price: 150 }],
      total_price: 150,
      invoice_number: 1005,
    },
    {
      id: 6,
      customer: "مجهول",
      items: [
        { name: "لوحة مفاتيح", price: 25 },
        { name: "ماوس", price: 15 },
      ],
      total_price: 40,
      invoice_number: 1006,
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  return (
    <main className="section-p">
      <div className="container-css section-space">
        <InvoicesHead />
        <SearchBar placeholder="ابحث عن فاتورة برقم الفاتورة" />
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-4 gap-4"
        >
          {invoices.map((invoice) => (
            <motion.li key={invoice.id} variants={itemVariants}>
              <Link
                href={"/"}
                className="p-3 rounded-md bg-white shadow flex flex-col gap-1 hover:scale-105 transition-css"
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[18px]">
                    فاتورة <span>#{invoice.invoice_number}</span>
                  </p>
                  <FiDollarSign className="text-yellow-600 size-5" />
                </div>
                <p>
                  العميل:
                  <span>{invoice.customer ? invoice.customer : "N/A"}</span>
                </p>
                <p>
                  إجمالي العناصر: <span>{invoice.items.length}</span>
                </p>
                <p className="font-extrabold text-green-500 text-xl">
                  {formatCurrency(invoice.total_price)}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}

export default Invoices;
