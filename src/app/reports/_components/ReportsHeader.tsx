import { FaChartLine } from "react-icons/fa";
// =================================================
function ReportsHeader() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="flex items-center gap-5 text-5xl font-extrabold">
        <FaChartLine /> التقارير و <span className="text-[#fbd639]">التحليلات</span>
      </h1>
      <p className="font-semibold text-slate-600 max-w-1/2 text-center">
        تتبع أداء المبيعات اليومي والدوري من خلال التحليلات المباشرة، ورؤى
        المنتجات، والتصورات البيانية القائمة على البيانات.
      </p>
    </div>
  );
}

export default ReportsHeader;
