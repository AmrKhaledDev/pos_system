import { prisma } from "@/lib/prisma";
import { Cache } from "../Cache/Cache";
// ========================================
export const CustomersDB = Cache(
  async () => {
    const customers = await prisma.customer.findMany();
    return customers;
  },
  ["customersDB"],
  { revalidate: 3600, tags: ["CustomersDB"] },
);
