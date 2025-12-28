-- CreateEnum
CREATE TYPE "Level" AS ENUM ('N5', 'N4', 'N3', 'N2', 'N1');

-- CreateEnum
CREATE TYPE "WordType" AS ENUM ('NOUN', 'VERB', 'I_ADJECTIVE', 'NA_ADJECTIVE', 'ADVERB', 'PARTICLE', 'CONJUNCTION', 'PRONOUN', 'EXPRESSION', 'COUNTER', 'OTHER');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson" (
    "id" TEXT NOT NULL,
    "lesson_number" INTEGER NOT NULL,
    "source" TEXT,
    "level" "Level" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocabulary" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "kana" TEXT,
    "romaji" TEXT,
    "meaning" TEXT NOT NULL,
    "word_type" "WordType" NOT NULL,
    "level" "Level" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "lessonId" TEXT,

    CONSTRAINT "vocabulary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grammar" (
    "id" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "explanation" TEXT,
    "notes" TEXT,
    "level" "Level" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "lessonId" TEXT,

    CONSTRAINT "grammar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kanji" (
    "id" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "kana" TEXT NOT NULL,
    "onyomi" TEXT,
    "kunyomi" TEXT,
    "meaning" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "stroke_count" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "lessonId" TEXT,

    CONSTRAINT "kanji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vocabulary_kanji" (
    "id" TEXT NOT NULL,
    "position" INTEGER,
    "vocabularyId" TEXT NOT NULL,
    "kanjiId" TEXT NOT NULL,

    CONSTRAINT "vocabulary_kanji_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listening" (
    "id" TEXT NOT NULL,
    "level" "Level" NOT NULL,

    CONSTRAINT "listening_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reading" (
    "id" TEXT NOT NULL,
    "level" "Level" NOT NULL,

    CONSTRAINT "reading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "audio" TEXT,
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "vocabularyId" TEXT,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "example" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vocabularyId" TEXT,
    "grammarId" TEXT,
    "kanjiId" TEXT,

    CONSTRAINT "example_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_lesson_number_key" ON "lesson"("lesson_number");

-- CreateIndex
CREATE INDEX "lesson_level_idx" ON "lesson"("level");

-- CreateIndex
CREATE INDEX "lesson_source_idx" ON "lesson"("source");

-- CreateIndex
CREATE INDEX "vocabulary_lessonId_idx" ON "vocabulary"("lessonId");

-- CreateIndex
CREATE INDEX "grammar_lessonId_idx" ON "grammar"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "kanji_character_key" ON "kanji"("character");

-- CreateIndex
CREATE INDEX "kanji_lessonId_idx" ON "kanji"("lessonId");

-- CreateIndex
CREATE INDEX "vocabulary_kanji_vocabularyId_idx" ON "vocabulary_kanji"("vocabularyId");

-- CreateIndex
CREATE INDEX "vocabulary_kanji_kanjiId_idx" ON "vocabulary_kanji"("kanjiId");

-- CreateIndex
CREATE UNIQUE INDEX "vocabulary_kanji_vocabularyId_kanjiId_key" ON "vocabulary_kanji"("vocabularyId", "kanjiId");

-- AddForeignKey
ALTER TABLE "vocabulary" ADD CONSTRAINT "vocabulary_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grammar" ADD CONSTRAINT "grammar_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kanji" ADD CONSTRAINT "kanji_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabulary_kanji" ADD CONSTRAINT "vocabulary_kanji_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabulary_kanji" ADD CONSTRAINT "vocabulary_kanji_kanjiId_fkey" FOREIGN KEY ("kanjiId") REFERENCES "kanji"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "example" ADD CONSTRAINT "example_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "vocabulary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "example" ADD CONSTRAINT "example_grammarId_fkey" FOREIGN KEY ("grammarId") REFERENCES "grammar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "example" ADD CONSTRAINT "example_kanjiId_fkey" FOREIGN KEY ("kanjiId") REFERENCES "kanji"("id") ON DELETE SET NULL ON UPDATE CASCADE;
