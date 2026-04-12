"use client";

import { ItemType } from "@/lib/types/ItemType";
import { Dispatch, SetStateAction } from "react";
import { IoIosArrowDown } from "react-icons/io";
// =================================================
function SelectProduct({
  item,
  setShowProducts,
  index,
}: {
  item: ItemType;
  setShowProducts: Dispatch<SetStateAction<string>>;
  index: number;
}) {
  return (
    <button
      onClick={() =>
        setShowProducts((prev) =>
          prev === index.toString() ? "" : index.toString(),
        )
      }
      className="flex w-full buttonShowProducts items-center justify-between border cursor-pointer border-slate-300 rounded-md px-2 py-1.5"
    >
      <h2
        className={`text-slate-400 text-sm ${item.product.name && "text-slate-700"}`}
      >
        {item.product.name ? item.product.name : "اختر عنصر"}
      </h2>
      <IoIosArrowDown className="text-slate-400 size-3" />
    </button>
  );
}

export default SelectProduct;
