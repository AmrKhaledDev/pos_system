import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { BsBoxes } from "react-icons/bs";
import Products from "./_components/Products";
import { ProductsDB } from "@/lib/dbCached/ProductsDB";
// =======================================
async function ProductsPage() {
  const products = await ProductsDB();
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
