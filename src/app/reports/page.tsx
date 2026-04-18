"use client";
import { GrLineChart } from "react-icons/gr";
import { PiInvoice } from "react-icons/pi";
import { LuTrophy } from "react-icons/lu";
import ReportsHeader from "./_components/ReportsHeader";
import ReportsStats from "./_components/ReportsStats";
import WeeklySalesChart from "./_components/WeeklySalesChart";
import SalesDateRangeFilter from "./_components/SalesDateRangeFilter";
import TopProducts from "./_components/TopProducts";
// ==============================================
function Reports() {
  const stats = [
    {
      label: "إجمالي المبيعات (اليوم)",
      value: 6768,
      icon: GrLineChart,
      valueIsCurrency: true,
    },
    {
      label: "الفواتير",
      value: "6",
      icon: PiInvoice,
      valueIsCurrency: false,
    },
    {
      label: "المنتج الأكثر مبيعاً",
      value: "mac",
      icon: LuTrophy,
      valueIsCurrency: false,
    },
  ];
  const weeklyData = [
    { day: "السبت", sales: 400 },
    { day: "الأحد", sales: 300 },
    { day: "الاثنين", sales: 500 },
    { day: "الثلاثاء", sales: 200 },
    { day: "الأربعاء", sales: 600 },
    { day: "الخميس", sales: 750 },
    { day: "الجمعة", sales: 900 },
  ];
  return (
    <main className="section-p">
      <div className="container-css flex flex-col gap-15">
        <ReportsHeader />
        <ReportsStats stats={stats} />
        <WeeklySalesChart weeklyData={weeklyData} />
        <SalesDateRangeFilter />
        <TopProducts />
      </div>
    </main>
  );
}

export default Reports;
