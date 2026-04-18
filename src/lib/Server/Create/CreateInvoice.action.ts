"use server";
import { prisma } from "@/lib/prisma";
import { ItemType } from "@/lib/types/ItemType";
import { Customer } from "@prisma/client";
import { revalidateTag } from "next/cache";
// ========================================
export const CreateInvoiceAction = async (
  products: ItemType[],
  tax: number,
  discount: number,
  customer: Customer | null,
): Promise<{ success: boolean; message: string }> => {
  try {
    const filteredProducts = products.filter(
      (p) => p.id && typeof Number(p.price) === "number" && p.quantity > 0,
    );
    if (filteredProducts.length === 0)
      return { success: false, message: "لا يوجد منتجات صالحة" };
    const productsPrices = filteredProducts.reduce(
      (acc, p) => acc + Number(p.price) * p.quantity,
      0,
    );
    const invoicePrice = Math.max(productsPrices + tax - discount, 0);
    await prisma.$transaction(async (tx) => {
      const dbProducts = await prisma.product.findMany({
        where: {
          id: {
            in: filteredProducts.map((p) => p.product.id),
          },
        },
        select: {
          id: true,
          stock: true,
        },
      });
      for (const p of filteredProducts) {
        const dbProduct = dbProducts.find(
          (product) => product.id === p.product.id,
        );
        if (!dbProduct)
          throw new Error("هناك منتج غير موجود. يتعذر انشاء فاتورة");
        if (dbProduct.stock < p.quantity)
          throw new Error(
            `لا يمكن انشاء فاتورة: المخزون غير كافي لمنتج ${p.product.name}`
          );
      }
      const newInvoice = await tx.invoice.create({
        data: {
          price: invoicePrice,
          discount: discount || 0,
          tax: tax || 0,
          customerId: customer?.id ?? null,
        },
      });
      await tx.invoiceProduct.createMany({
        data: filteredProducts.map((p) => ({
          quantity: p.quantity,
          price: Number(p.price),
          productId: p.product.id,
          invoiceId: newInvoice.id,
        })),
      });
      await Promise.all(
        filteredProducts.map((p) =>
          tx.product.update({
            where: {
              id: p.product.id,
            },
            data: {
              stock: {
                decrement: p.quantity,
              },
            },
          }),
        ),
      );
    });
    revalidateTag("InvoicesDB","")
    revalidateTag("ProductsDB","")
    return { success: true, message: "تم انشاء فاتورة جديدة" };
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message:
        error?.message || "حدث خطأ أثناء انشاء فاتورة جديدة حاول مرة أخرى",
    };
  }
};
