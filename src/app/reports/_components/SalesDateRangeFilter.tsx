import { MdOutlineDateRange } from "react-icons/md";
// ==============================================
function SalesDateRangeFilter() {
  return (
    <section className="bg-white p-4 rounded-md shadow-md">
      <h2 className="font-bold flex items-center gap-3 text-xl mb-5">
        <MdOutlineDateRange className="size-6" /> المبيعات بين التواريخ
      </h2>
      <form className="flex items-center gap-5">
        <div className="space-x-1">
          <input
            type="date"
            className="border py-1.5 px-3 rounded-md border-slate-300 outline-none focus:border-slate-600 transition-css"
          />
          <input
            type="date"
            className="border py-1.5 px-3 rounded-md border-slate-300 outline-none focus:border-slate-600 transition-css"
          />
        </div>
        <button className="text-white bg-black py-1.5 px-7 rounded-md cursor-pointer font-semibold">
          توليد
        </button>
      </form>
    </section>
  );
}

export default SalesDateRangeFilter;
