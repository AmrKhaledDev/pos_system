"use client";

import { ItemType } from "@/lib/types/ItemType";
import { Product } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";
// ====================================================================================
function Products({
  setItems,
  index,
  items,
  products,
}: {
  setItems: Dispatch<SetStateAction<ItemType[]>>;
  index: number;
  items: ItemType[];
  products: Product[];
}) {
  const filteredProducts = products.filter(
    (product) => !items.some((item) => item.product?.id === product.id),
  );
  return (
    <div className="bg-[#ccccca] max-h-40  overflow-auto absolute shadow -bottom-26 -left-45 z-10 w-full flex flex-col gap-2  p-2 rounded-md font-semibold">
      {filteredProducts.map((product) => (
        <button
          onClick={() =>
            setItems((prev) =>
              prev.map((item, i) =>
                i === index
                  ? {
                      ...item,
                      product: {
                        id: product.id,
                        name: product.name,
                      },
                      price: product.selling_price.toString(),
                    }
                  : item,
              ),
            )
          }
          key={product.id}
          className="hover:bg-[#287DF4] flex items-center gap-4 hover:text-white w-full text-start px-2 rounded"
        >
          {product.name}
        </button>
      ))}
    </div>
  );
}

export default Products;
