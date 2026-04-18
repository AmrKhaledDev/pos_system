/*
  Warnings:

  - You are about to drop the column `opponent` on the `Invoice` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "opponent",
ADD COLUMN     "discount" DOUBLE PRECISION NOT NULL DEFAULT 0;
