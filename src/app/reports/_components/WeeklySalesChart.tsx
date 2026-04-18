import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// ==================================
function WeeklySalesChart({ weeklyData }: { weeklyData: any[] }) {
  return (
    <section className="w-full p-6 bg-white rounded-xl shadow-sm border border-gray-100">
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
              fill="#fbd639"
              radius={[4, 4, 0, 0]}
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default WeeklySalesChart;
