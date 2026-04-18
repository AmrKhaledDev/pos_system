import { formatCurrency } from "@/lib/FormatCurrency";
// ======================================================
function ReportsStats({stats}:{stats:any[]}) {
  return (
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
            <p className="font-bold text-2xl text-[#fbd639] capitalize">
              {state.valueIsCurrency
                ? formatCurrency(Number(state.value))
                : state.value}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReportsStats;
