-- CreateEnum
CREATE TYPE "Status" AS ENUM ('draft', 'imported');

-- CreateTable
CREATE TABLE "Product" (
    "code" SERIAL NOT NULL,
    "barcode" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "imported_t" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "packaging" TEXT NOT NULL,
    "brands" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("code")
);
