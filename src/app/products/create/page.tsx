"use client";
import { LuBox } from "react-icons/lu";
import CreateProductFormField from "./_components/CreateProductFormField";
import { useState } from "react";
// ============================================
function CreateProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [purchasePrice, setpurchasePrice] = useState("");
  const [sellingPrice, setsellingPrice] = useState("");
  const [stock, setstock] = useState("");
  const [minStock, setminStock] = useState("5");
  const inputs = [
    {
      id: "1",
      placeholder: "اسم المنتج",
      type: "text",
      value: name,
      onChange: setName,
    },
    {
      id: "2",
      placeholder: "الفئة",
      type: "text",
      value: category,
      onChange: setCategory,
    },
    {
      id: "3",
      placeholder: "سعر الشراء",
      type: "number",
      value: purchasePrice,
      onChange: setpurchasePrice,
    },
    {
      id: "4",
      placeholder: "سعر البيع",
      type: "number",
      value: sellingPrice,
      onChange: setsellingPrice,
    },
    {
      id: "5",
      placeholder: "الكمية المتوفرة (المخزون)",
      type: "number",
      value: stock,
      onChange: setstock,
    },
    {
      id: "6",
      placeholder: "الحد الأدنى للمنتج",
      type: "number",
      value: minStock,
      onChange: setminStock,
    },
  ];

  return (
    <main className="section-p flex items-center justify-center">
      <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
        <form className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-4 text-[#d48806]">
            <LuBox size={28} />
            <h2 className="text-2xl font-bold">إضافة منتج جديد</h2>
          </div>
          {inputs.map((input) => (
            <CreateProductFormField
              value={input.value}
              onChange={input.onChange}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-linear-to-r from-[#ff9a00] to-[#ff7a00] text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all"
          >
            حفظ المنتج
          </button>
        </form>
      </form>
    </main>
  );
}

export default CreateProduct;
