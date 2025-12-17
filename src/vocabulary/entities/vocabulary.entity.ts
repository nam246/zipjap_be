import { Level, WordType } from '../../generated/prisma';

export class Vocabulary {
  id: string;
  word: string;
  kanji: string | null;
  romaji: string | null;
  meaning: string;
  wordType: WordType;
  jlptLevel: Level;
  examples: string | null;
  mediaId: string;
  createdAt: Date;
  updatedAt: Date;
}
