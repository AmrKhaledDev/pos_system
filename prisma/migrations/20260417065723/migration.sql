/*
  Warnings:

  - You are about to drop the column `name` on the `InvoiceProduct` table. All the data in the column will be lost.
  - Added the required column `productId` to the `InvoiceProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InvoiceProduct" DROP COLUMN "name",
ADD COLUMN     "productId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "InvoiceProduct" ADD CONSTRAINT "InvoiceProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
