import { FaRegStar } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
// ===============================================
function TopProducts() {
  return (
    <section className="bg-white rounded-md p-4 shadow-md">
      <h2 className="flex items-center gap-3 text-xl font-bold mb-5">
        <FaRegStar className="size-6" />
        أعلى 10 منتجات
      </h2>
      <ul className="grid grid-cols-4 gap-5">
        <li className="border border-slate-100 text-slate-700 shadow py-3 px-4 rounded-md flex items-center gap-5">
          <FiBox className="size-7" />
          <div>
            <h2 className="font-bold text-xl">Iphone 17</h2>
            <h4>
              تم بيع : <span className="font-bold">14</span>
            </h4>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default TopProducts;
