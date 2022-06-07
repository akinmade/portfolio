/*
  Warnings:

  - You are about to drop the `Feature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Podcast` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Fiction" ADD COLUMN "articleUrl" TEXT;
ALTER TABLE "Fiction" ADD COLUMN "imageUrl" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Feature";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Podcast";
PRAGMA foreign_keys=on;
