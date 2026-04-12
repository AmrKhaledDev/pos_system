"use client";

import { formatCurrency } from "@/lib/FormatCurrency";
import Link from "next/link";
import { LuBox } from "react-icons/lu";
import { motion } from "framer-motion";
// ========================================================
function Products({ products }: { products: any[] }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration:0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-4 gap-5"
    >
      {products.map((product) => (
        <li key={product.id}>
          <Link
            href={"/"}
            className="p-3 rounded-lg ring ring-slate-200 bg-white shadow flex flex-col gap-1.5 hover:scale-103 transition-css"
          >
            <div className="flex items-center gap-4">
              <LuBox className="p-2 rounded-md size-10 bg-yellow-50 text-yellow-700 shadow ring ring-yellow-600" />
              <h2 className="font-bold text-xl">{product.name}</h2>
            </div>
            <p className="flex items-center gap-1">
              السعر:
              <span className="font-semibold">
                {formatCurrency(product.selling_price)}
              </span>
            </p>
            <p className="flex items-center gap-1">
              الكمية المخزنة:
              <span className="font-semibold">{product.stock}</span>
            </p>
            <p className="flex items-center gap-1">
              الصنف:
              <span className="font-semibold">{product.category}</span>
            </p>
            {product.stock <= product.min_stock && (
              <p className="font-normal text-xs text-red-500 ring ring-red-200 bg-red-50 py-1 px-2 rounded">
                أوشك على النفاذ! متوفر {product.stock} قطع فقط
              </p>
            )}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}

export default Products;
