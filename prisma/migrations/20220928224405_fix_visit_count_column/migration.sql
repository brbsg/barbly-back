/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "urls" ALTER COLUMN "visitCount" SET DEFAULT 0;

-- DropTable
DROP TABLE "Product";

-- DropEnum
DROP TYPE "Status";
