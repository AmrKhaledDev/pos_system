import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { BsBoxes } from "react-icons/bs";
import Products from "./_components/Products";
// =======================================
function ProductsPage() {
  const products = [
    {
      id: "uuid-001",
      name: "iPhone 15 Pro",
      purchase_price: 950,
      selling_price: 1150,
      category: "Smartphones",
      stock: 5,
      min_stock: 5,
      description: "أحدث إصدار من آيفون بهيكل تيتانيوم",
      image: "",
      createdAt: "2026-04-09T10:00:00Z",
    },
    {
      id: "uuid-002",
      name: "Samsung S24 Ultra",
      purchase_price: 900,
      selling_price: 1100,
      category: "Smartphones",
      stock: 15,
      min_stock: 3,
      description: "هاتف سامسونج الرائد مع قلم S-Pen وميزات ذكاء اصطناعي",
      image: "",
      createdAt: "2026-04-09T10:05:00Z",
    },
    {
      id: "uuid-003",
      name: "MacBook Air M2",
      purchase_price: 1000,
      selling_price: 1250,
      category: "Laptops",
      stock: 8,
      min_stock: 2,
      description: "لابتوب أبل نحيف وخفيف بمعالج M2 القوي",
      image: "",
      createdAt: "2026-04-09T10:10:00Z",
    },
    {
      id: "uuid-004",
      name: "AirPods Pro 2",
      purchase_price: 180,
      selling_price: 240,
      category: "Accessories",
      stock: 30,
      min_stock: 10,
      description: "سماعات أبل اللاسلكية مع ميزة إلغاء الضوضاء",
      image: "",
      createdAt: "2026-04-09T10:15:00Z",
    },
    {
      id: "uuid-005",
      name: "Dell XPS 15",
      purchase_price: 1450,
      selling_price: 1750,
      category: "Laptops",
      stock: 5,
      min_stock: 2,
      description: "لابتوب ديل القوي المخصص للمبدعين والمصممين",
      image: "",
      createdAt: "2026-04-09T10:20:00Z",
    },
    {
      id: "uuid-006",
      name: "Sony WH-1000XM5",
      purchase_price: 280,
      selling_price: 350,
      category: "Accessories",
      stock: 12,
      min_stock: 4,
      description: "أفضل سماعات رأس في العالم من حيث عزل الصوت",
      image: "",
      createdAt: "2026-04-09T10:25:00Z",
    },
  ];
  return (
    <main className="section-p">
      <div className="container-css section-space">
        <SectionHeader
          title="المنتجات"
          icon={<BsBoxes className="section-icon" />}
        />
        <Products products={products} />
      </div>
    </main>
  );
}

export default ProductsPage;
