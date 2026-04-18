import { prisma } from "@/lib/prisma";
import { Cache } from "../Cache/Cache";
// ========================================
export const ProductsDB = Cache(
  async () => {
    const products = await prisma.product.findMany({
      where: {
        stock: {
          gte: 1,
        },
      },
    });
    return products;
  },
  ["productsDB"],
  { revalidate: 3600, tags: ["ProductsDB"] },
);
