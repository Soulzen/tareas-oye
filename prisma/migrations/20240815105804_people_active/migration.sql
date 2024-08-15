/*
  Warnings:

  - The primary key for the `days` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date` on the `days` table. All the data in the column will be lost.
  - The `id` column on the `days` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `people` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `people` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `assignmentsId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `tasks` table. All the data in the column will be lost.
  - The `id` column on the `tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `A` on the `_daysTotasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_daysTotasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `peopleId` on the `assignments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `days` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_daysTotasks" DROP CONSTRAINT "_daysTotasks_A_fkey";

-- DropForeignKey
ALTER TABLE "_daysTotasks" DROP CONSTRAINT "_daysTotasks_B_fkey";

-- DropForeignKey
ALTER TABLE "assignments" DROP CONSTRAINT "assignments_peopleId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_assignmentsId_fkey";

-- AlterTable
ALTER TABLE "_daysTotasks" DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "assignments" DROP COLUMN "peopleId",
ADD COLUMN     "peopleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "days" DROP CONSTRAINT "days_pkey",
DROP COLUMN "date",
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "days_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "people" DROP CONSTRAINT "people_pkey",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "people_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_pkey",
DROP COLUMN "assignmentsId",
DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "weight" DROP DEFAULT,
ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "_assignmentsTotasks" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_assignmentsTotasks_AB_unique" ON "_assignmentsTotasks"("A", "B");

-- CreateIndex
CREATE INDEX "_assignmentsTotasks_B_index" ON "_assignmentsTotasks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_daysTotasks_AB_unique" ON "_daysTotasks"("A", "B");

-- CreateIndex
CREATE INDEX "_daysTotasks_B_index" ON "_daysTotasks"("B");

-- AddForeignKey
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_peopleId_fkey" FOREIGN KEY ("peopleId") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_daysTotasks" ADD CONSTRAINT "_daysTotasks_A_fkey" FOREIGN KEY ("A") REFERENCES "days"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_daysTotasks" ADD CONSTRAINT "_daysTotasks_B_fkey" FOREIGN KEY ("B") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_assignmentsTotasks" ADD CONSTRAINT "_assignmentsTotasks_A_fkey" FOREIGN KEY ("A") REFERENCES "assignments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_assignmentsTotasks" ADD CONSTRAINT "_assignmentsTotasks_B_fkey" FOREIGN KEY ("B") REFERENCES "tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
