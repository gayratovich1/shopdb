/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `cover` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('none', 'user', 'admin', 'supervisor');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('waiting_pay', 'delivered', 'accepted');

-- DropIndex
DROP INDEX "Cart_productId_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "cover" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'none';

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'waiting_pay',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BotUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "telegramId" INTEGER NOT NULL,

    CONSTRAINT "BotUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BotUser_userId_key" ON "BotUser"("userId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BotUser" ADD CONSTRAINT "BotUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
