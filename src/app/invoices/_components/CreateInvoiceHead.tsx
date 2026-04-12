import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
// =============================================
function CreateInvoiceHead({
  setShowCreateInvoice,
}: {
  setShowCreateInvoice: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold"> إنشاء فاتورة </h2>
      <button
        onClick={() => setShowCreateInvoice(false)}
        className="text-xl cursor-pointer text-slate-600 p-2 rounded-full hover:bg-black/10 transition-css"
      >
        <IoClose />
      </button>
    </div>
  );
}

export default CreateInvoiceHead;
