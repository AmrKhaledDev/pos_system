"use client";
import Link from "next/link";
import { FiDollarSign } from "react-icons/fi";
import { formatCurrency } from "@/lib/FormatCurrency";
import { motion } from "framer-motion";
import { InvoiceDBType } from "@/lib/types/ItemType";
// =======================================
function Invoices({ invoices }: { invoices: InvoiceDBType[] }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  return (
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
      {invoices.map((invoice: InvoiceDBType) => {
        const items = invoice.invoiceProducts.reduce(
          (acc, p) => acc + p.quantity,
          0,
        );
        return (
          <motion.li key={invoice.id} variants={itemVariants}>
            <Link
              href={"/"}
              className="p-3 rounded-md bg-white shadow flex flex-col gap-1 hover:scale-105 transition-css"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-[18px]">
                  فاتورة <span>#{invoice.invoice_num}</span>
                </p>
                <FiDollarSign className="text-yellow-600 size-5" />
              </div>
              <p className="flex items-center gap-1">
                العميل:
                <span>{invoice.customer ? invoice.customer.name : "N/A"}</span>
              </p>
              <p>
                إجمالي العناصر: <span>{items}</span>
              </p>
              <p className="font-extrabold text-green-500 text-xl">
                {formatCurrency(invoice.price)}
              </p>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default Invoices;
