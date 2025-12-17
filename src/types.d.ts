export type Vocabulary = {
  id: string;
  word: string;
  kanji: string | null;
  romaji: string | null;
  meaning: string;
  wordType: WordType;
  level: LevelEnum;
  examples: string | null;
  mediaId: string;
};
