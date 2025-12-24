-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "lesson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lesson_number" INTEGER NOT NULL,
    "source" TEXT,
    "level" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "vocabulary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "kana" TEXT,
    "romaji" TEXT,
    "meaning" TEXT NOT NULL,
    "word_type" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "lessonId" TEXT,
    "kanjiId" TEXT NOT NULL,
    CONSTRAINT "vocabulary_kanjiId_fkey" FOREIGN KEY ("kanjiId") REFERENCES "Kanji" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vocabulary_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "grammar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pattern" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "explaination" TEXT,
    "notes" TEXT,
    "level" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "lessonId" TEXT,
    CONSTRAINT "grammar_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Kanji" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "character" TEXT NOT NULL,
    "kana" TEXT NOT NULL,
    "onyomi" TEXT,
    "kunyomi" TEXT,
    "meaning" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "stroke_count" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "lessonId" TEXT,
    CONSTRAINT "Kanji_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "listening" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "reading" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "audio" TEXT,
    "image" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "vocabularyId" TEXT,
    CONSTRAINT "Media_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "vocabulary" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "example" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vocabularyId" TEXT,
    "grammarId" TEXT,
    "kanjiId" TEXT,
    CONSTRAINT "example_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "vocabulary" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "example_grammarId_fkey" FOREIGN KEY ("grammarId") REFERENCES "grammar" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "example_kanjiId_fkey" FOREIGN KEY ("kanjiId") REFERENCES "Kanji" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "vocabulary_kanjiId_key" ON "vocabulary"("kanjiId");
