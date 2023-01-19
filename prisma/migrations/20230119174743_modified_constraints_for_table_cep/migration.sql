/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `CEP` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `identifier` on the `CEP` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CEP" DROP COLUMN "identifier",
ADD COLUMN     "identifier" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CEP_identifier_key" ON "CEP"("identifier");
