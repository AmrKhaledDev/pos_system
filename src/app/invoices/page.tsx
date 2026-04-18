import { ProductsDB } from "@/lib/dbCached/ProductsDB";
import Invoices from "./_components/Invoices";
import InvoicesHead from "./_components/InvoicesHead";
import SearchBar from "@/components/SearchBar/SearchBar";
import { CustomersDB } from "@/lib/dbCached/CustomersDB";
import { InvoicesDB } from "@/lib/dbCached/InvoicesDb";
// ===========================================================
async function InvoicesPage() {
  const invoices = await InvoicesDB();
  const products = await ProductsDB();
  const customers = await CustomersDB();
  return (
    <main className="section-p">
      <div className="container-css section-space">
        <InvoicesHead products={products} customers={customers} />
        <SearchBar placeholder="ابحث عن فاتورة برقم الفاتورة" />
        <Invoices invoices={invoices} />
      </div>
    </main>
  );
}

export default InvoicesPage;
