-- CreateTable
CREATE TABLE "Feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT,
    "imageUrl" TEXT,
    "articleUrl" TEXT
);

-- CreateTable
CREATE TABLE "Podcast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rssLink" TEXT,
    "genre" TEXT,
    "country" TEXT DEFAULT 'Nigeria',
    "language" TEXT DEFAULT 'English'
);
