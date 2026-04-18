"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Products from "./Products";
import { ItemType } from "@/lib/types/ItemType";
import SelectProduct from "./SelectProduct";
import QuantityPriceInputs from "./QuantityPriceInputs";
import { Product } from "@prisma/client";
// =========================================================================

function Items({
  items,
  setItems,
  products,
}: {
  items: ItemType[];
  setItems: Dispatch<SetStateAction<ItemType[]>>;
  products: Product[];
}) {
  const [showProducts, setShowProducts] = useState("");
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!e.target.closest(".boxProducts, .buttonShowProducts"))
          setShowProducts("");
      }
    };
    document.addEventListener("click", handle);
    return () => removeEventListener("click", handle);
  }, []);
  console.log(items);
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={item.id} className="flex items-center gap-2">
          <div className="border p-2 flex-1 rounded-lg flex items-center gap-2 border-slate-400 relative">
            <div className="flex-1">
              <SelectProduct
                setShowProducts={setShowProducts}
                index={index}
                item={item}
              />
              {showProducts == index.toString() && (
                <Products setItems={setItems} items={items} index={index}  products={products} />
              )}
            </div>
            <QuantityPriceInputs
              setItems={setItems}
              item={item}
              index={index}
            />
          </div>
          <button
            onClick={() =>
              setItems((prev) => prev.filter((_, i) => i !== index))
            }
            className="text-slate-400 cursor-pointer"
          >
            <IoClose />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Items;
