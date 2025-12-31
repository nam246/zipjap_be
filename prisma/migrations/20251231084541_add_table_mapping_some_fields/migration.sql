/*
  Warnings:

  - You are about to drop the column `grammarId` on the `example` table. All the data in the column will be lost.
  - You are about to drop the column `kanjiId` on the `example` table. All the data in the column will be lost.
  - You are about to drop the column `vocabularyId` on the `example` table. All the data in the column will be lost.
  - You are about to drop the column `lessonId` on the `grammar` table. All the data in the column will be lost.
  - You are about to drop the column `lessonId` on the `kanji` table. All the data in the column will be lost.
  - The `source` column on the `lesson` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `vocabularyId` on the `media` table. All the data in the column will be lost.
  - You are about to drop the column `lessonId` on the `vocabulary` table. All the data in the column will be lost.
  - You are about to drop the column `kanjiId` on the `vocabulary_kanji` table. All the data in the column will be lost.
  - You are about to drop the column `vocabularyId` on the `vocabulary_kanji` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[vocabulary_id,kanji_id]` on the table `vocabulary_kanji` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kanji_id` to the `vocabulary_kanji` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vocabulary_id` to the `vocabulary_kanji` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Source" AS ENUM ('MINNA_NO_NIHONGO', 'SOUMATOME');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('VOCABULARY_CONTEXT_USAGE', 'VOCABULARY_SYNONYMS', 'VOCABULARY_WORD_USAGE', 'KANJI_READING', 'KANJI_WRITING', 'GRAMMAR_SELECT', 'GRAMMAR_STAR_ORDER', 'GRAMMAR_TEXT_GRAMMAR', 'READING_SHORT_PASSAGE', 'READING_MEDIUM_PASSAGE', 'READING_LONG_PASSAGE', 'READING_COMPARISION', 'READING_INFO_RETRIEVAL', 'LISTENING_TASK_BASED', 'LISTENING_KEY_POINT', 'LISTENING_GENERAL_UNDERSTANDING', 'LISTENING_QUICK_RESPONSE', 'LISTENING_INTEGRATED_COMPREHENSION');

-- DropForeignKey
ALTER TABLE "example" DROP CONSTRAINT "example_grammarId_fkey";

-- DropForeignKey
ALTER TABLE "example" DROP CONSTRAINT "example_kanjiId_fkey";

-- DropForeignKey
ALTER TABLE "example" DROP CONSTRAINT "example_vocabularyId_fkey";

-- DropForeignKey
ALTER TABLE "grammar" DROP CONSTRAINT "grammar_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "kanji" DROP CONSTRAINT "kanji_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "media" DROP CONSTRAINT "media_vocabularyId_fkey";

-- DropForeignKey
ALTER TABLE "vocabulary" DROP CONSTRAINT "vocabulary_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "vocabulary_kanji" DROP CONSTRAINT "vocabulary_kanji_kanjiId_fkey";

-- DropForeignKey
ALTER TABLE "vocabulary_kanji" DROP CONSTRAINT "vocabulary_kanji_vocabularyId_fkey";

-- DropIndex
DROP INDEX "grammar_lessonId_idx";

-- DropIndex
DROP INDEX "kanji_lessonId_idx";

-- DropIndex
DROP INDEX "vocabulary_lessonId_idx";

-- DropIndex
DROP INDEX "vocabulary_kanji_kanjiId_idx";

-- DropIndex
DROP INDEX "vocabulary_kanji_vocabularyId_idx";

-- DropIndex
DROP INDEX "vocabulary_kanji_vocabularyId_kanjiId_key";

-- AlterTable
ALTER TABLE "example" DROP COLUMN "grammarId",
DROP COLUMN "kanjiId",
DROP COLUMN "vocabularyId",
ADD COLUMN     "grammar_id" TEXT,
ADD COLUMN     "kanji_id" TEXT,
ADD COLUMN     "vocabulary_id" TEXT;

-- AlterTable
ALTER TABLE "grammar" DROP COLUMN "lessonId",
ADD COLUMN     "lesson_id" TEXT;

-- AlterTable
ALTER TABLE "kanji" DROP COLUMN "lessonId",
ADD COLUMN     "lesson_id" TEXT;

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "source",
ADD COLUMN     "source" "Source";

-- AlterTable
ALTER TABLE "media" DROP COLUMN "vocabularyId",
ADD COLUMN     "vocabulary_id" TEXT;

-- AlterTable
ALTER TABLE "vocabulary" DROP COLUMN "lessonId",
ADD COLUMN     "lesson_id" TEXT;

-- AlterTable
ALTER TABLE "vocabulary_kanji" DROP COLUMN "kanjiId",
DROP COLUMN "vocabularyId",
ADD COLUMN     "kanji_id" TEXT NOT NULL,
ADD COLUMN     "vocabulary_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "test" (
    "id" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "level" "Level" NOT NULL,
    "question_type" "QuestionType" NOT NULL,
    "mediaUrl" TEXT,
    "test_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "choice" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "point" DOUBLE PRECISION,
    "is_correct" BOOLEAN NOT NULL,
    "question_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "choice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "choice_question_id_idx" ON "choice"("question_id");

-- CreateIndex
CREATE INDEX "grammar_lesson_id_idx" ON "grammar"("lesson_id");

-- CreateIndex
CREATE INDEX "kanji_lesson_id_idx" ON "kanji"("lesson_id");

-- CreateIndex
CREATE INDEX "lesson_source_idx" ON "lesson"("source");

-- CreateIndex
CREATE INDEX "vocabulary_lesson_id_idx" ON "vocabulary"("lesson_id");

-- CreateIndex
CREATE INDEX "vocabulary_kanji_vocabulary_id_idx" ON "vocabulary_kanji"("vocabulary_id");

-- CreateIndex
CREATE INDEX "vocabulary_kanji_kanji_id_idx" ON "vocabulary_kanji"("kanji_id");

-- CreateIndex
CREATE UNIQUE INDEX "vocabulary_kanji_vocabulary_id_kanji_id_key" ON "vocabulary_kanji"("vocabulary_id", "kanji_id");

-- AddForeignKey
ALTER TABLE "vocabulary" ADD CONSTRAINT "vocabulary_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "grammar" ADD CONSTRAINT "grammar_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kanji" ADD CONSTRAINT "kanji_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabulary_kanji" ADD CONSTRAINT "vocabulary_kanji_vocabulary_id_fkey" FOREIGN KEY ("vocabulary_id") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vocabulary_kanji" ADD CONSTRAINT "vocabulary_kanji_kanji_id_fkey" FOREIGN KEY ("kanji_id") REFERENCES "kanji"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media" ADD CONSTRAINT "media_vocabulary_id_fkey" FOREIGN KEY ("vocabulary_id") REFERENCES "vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "example" ADD CONSTRAINT "example_vocabulary_id_fkey" FOREIGN KEY ("vocabulary_id") REFERENCES "vocabulary"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "example" ADD CONSTRAINT "example_grammar_id_fkey" FOREIGN KEY ("grammar_id") REFERENCES "grammar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "example" ADD CONSTRAINT "example_kanji_id_fkey" FOREIGN KEY ("kanji_id") REFERENCES "kanji"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "test"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "choice" ADD CONSTRAINT "choice_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
