/*
  Warnings:

  - You are about to drop the column `book` on the `Loans` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Loans` table. All the data in the column will be lost.
  - Added the required column `book_id` to the `Loans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Loans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loans" DROP COLUMN "book",
DROP COLUMN "user",
ADD COLUMN     "book_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Loans" ADD CONSTRAINT "Loans_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loans" ADD CONSTRAINT "Loans_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
