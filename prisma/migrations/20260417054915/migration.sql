-- CreateEnum
CREATE TYPE "Role" AS ENUM ('مستخدم', 'مسؤول', 'كاشير');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'مستخدم';
