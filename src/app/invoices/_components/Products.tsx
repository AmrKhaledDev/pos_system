"use client";

import { ItemType } from "@/lib/types/ItemType";
import { Dispatch, SetStateAction } from "react";
// ====================================================================================
function Products({
  setItems,
  index,
  items,
}: {
  setItems: Dispatch<SetStateAction<ItemType[]>>;
  index: number;
  items: ItemType[];
}) {
  const products = [
    { id: "1", name: "Iphone 15 Pro", price: 52000 },
    { id: "2", name: "Samsung S24 Ultra", price: 48000 },
    { id: "3", name: "AirPods Pro", price: 12000 },
    { id: "4", name: "Apple Watch Series 9", price: 18000 },
    { id: "5", name: "Dell Mouse", price: 850 },
    { id: "6", name: "Mechanical Keyboard", price: 2200 },
    { id: "7", name: "USB-C Charger", price: 600 },
    { id: "8", name: "Laptop Stand", price: 950 },
  ];
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
                      price: product.price.toString(),
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
