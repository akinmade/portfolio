-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "category" TEXT,
    "imageUrl" TEXT,
    "articleUrl" TEXT,
    "podcastTitle" TEXT DEFAULT 'null',
    "podcastUrl" TEXT NOT NULL DEFAULT 'null',
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("articleUrl", "authorId", "category", "content", "id", "imageUrl", "podcastTitle", "podcastUrl", "published", "title") SELECT "articleUrl", "authorId", "category", "content", "id", "imageUrl", "podcastTitle", "podcastUrl", "published", "title" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
