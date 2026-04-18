import { Prisma } from "@prisma/client";

export type ItemType = {
  id: string;
  product: {
    id: string;
    name: string;
  };
  quantity: number;
  price: string;
};
export type InvoiceDBType = Prisma.InvoiceGetPayload<{
  include: {
    customer: true;
    invoiceProducts: true;
  };
}>;
