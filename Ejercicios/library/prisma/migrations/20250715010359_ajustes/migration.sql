/*
  Warnings:

  - You are about to drop the column `bookId` on the `Loans` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Loans` table. All the data in the column will be lost.
  - Added the required column `book` to the `Loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Loans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loans" DROP COLUMN "bookId",
DROP COLUMN "userId",
ADD COLUMN     "book" INTEGER NOT NULL,
ADD COLUMN     "user" INTEGER NOT NULL;
