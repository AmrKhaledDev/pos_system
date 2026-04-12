"use client";
import { FaChartLine } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { PiInvoice } from "react-icons/pi";
import { LuTrophy } from "react-icons/lu";
import { formatCurrency } from "@/lib/FormatCurrency";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
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
        <div className="flex flex-col items-center gap-6">
          <h1 className="flex items-center gap-5 text-5xl font-extrabold">
            <FaChartLine /> التقارير والتحليلات
          </h1>
          <p className="font-semibold text-slate-600 max-w-1/2 text-center">
            تتبع أداء المبيعات اليومي والدوري من خلال التحليلات المباشرة، ورؤى
            المنتجات، والتصورات البيانية القائمة على البيانات.
          </p>
        </div>
        <section>
          <ul className="grid grid-cols-3 gap-5">
            {stats.map((state) => (
              <li
                key={state.label}
                className="rounded-md shadow-md ring ring-neutral-200 p-4 bg-white space-y-5"
              >
                <div className="flex items-center gap-5">
                  <state.icon className="p-2 rounded-md bg-gray-100 text-black size-10 shadow" />
                  <h2 className="font-bold text-xl">{state.label}</h2>
                </div>
                <p className="font-bold text-2xl text-slate-700 capitalize">
                  {state.valueIsCurrency
                    ? formatCurrency(Number(state.value))
                    : state.value}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <div className="w-full p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-xl">📊</span>
              <h2 className="text-lg font-bold text-gray-800">
                نظرة عامة على المبيعات الأسبوعية
              </h2>
            </div>
            <div className="h-75 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 15, fontWeight: 600 }}
                  />
                  <Tooltip
                    cursor={{ fill: "#f9fafb" }}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar
                    dataKey="sales"
                    fill="#ff7801"
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
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
        <section className="bg-white rounded-md p-4 shadow-md">
          <h2 className="flex items-center gap-3 text-xl font-bold mb-5">
            <FaRegStar className="size-6" />
            أعلى 10 منتجات
          </h2>
          <ul className="grid grid-cols-4 gap-5">
            <li className="border border-slate-100 text-slate-700 shadow py-3 px-4 rounded-md flex items-center gap-5">
              <FiBox className="size-7"/>
              <div>
                <h2 className="font-bold text-xl">Iphone 17</h2>
                <h4>تم بيع : <span className="font-bold">14</span></h4>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Reports;
