"use client";

import { ItemType } from "@/lib/types/ItemType";
import { Dispatch, SetStateAction } from "react";
// ===================================================
function QuantityPriceInputs({
  setItems,
  index,
  item,
}: {
  setItems: Dispatch<SetStateAction<ItemType[]>>;
  index: number;
  item: ItemType;
}) {
  return (
    <>
      <input
        onChange={(e) =>
          setItems((prev) =>
            prev.map((item, i) =>
              i === index
                ? {
                    ...item,
                    quantity: Number(e.target.value),
                  }
                : item,
            ),
          )
        }
        defaultValue={item.quantity}
        type="number"
        placeholder="الكمية"
        className="border w-30 border-slate-300 rounded-md px-2 py-1.5 text-sm outline-none focus:border-slate-400 transition-css"
      />
      <input
        onChange={(e) =>
          setItems((prev) =>
            prev.map((item, i) =>
              i === index ? { ...item, price: e.target.value } : item,
            ),
          )
        }
        value={item.price}
        type="number"
        placeholder="السعر"
        className="border w-30 border-slate-300 rounded-md px-2 py-1.5 text-sm outline-none focus:border-slate-400 transition-css"
      />
    </>
  );
}

export default QuantityPriceInputs;
