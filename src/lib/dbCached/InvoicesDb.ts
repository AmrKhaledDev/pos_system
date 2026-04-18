import { prisma } from "@/lib/prisma";
import { Cache } from "../Cache/Cache";
// ========================================
export const InvoicesDB = Cache(
  async () => {
    const invoices = await prisma.invoice.findMany({
      include: {
        customer: true,
        invoiceProducts: true,
      },
    });
    return invoices;
  },
  ["invoicesDB"],
  { revalidate: 3600, tags: ["InvoicesDB"] },
);
