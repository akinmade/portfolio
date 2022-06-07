/*
  Warnings:

  - You are about to drop the column `category_id` on the `Fiction` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fiction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "imageUrl" TEXT,
    "articleUrl" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Fiction_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Fiction" ("articleUrl", "authorId", "content", "id", "imageUrl", "published", "title") SELECT "articleUrl", "authorId", "content", "id", "imageUrl", "published", "title" FROM "Fiction";
DROP TABLE "Fiction";
ALTER TABLE "new_Fiction" RENAME TO "Fiction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
