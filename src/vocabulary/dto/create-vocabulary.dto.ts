import { IsString, IsEnum, IsOptional } from 'class-validator';
import { Level, WordType } from '../../generated/prisma';

export class CreateVocabularyDto {
  @IsString()
  word: string;

  @IsString()
  @IsOptional()
  kanjiId?: string;

  @IsString()
  @IsOptional()
  romaji?: string;

  @IsString()
  meaning: string;

  @IsEnum(WordType)
  wordType: WordType;

  @IsEnum(Level)
  level: Level;

  lessonId: string;

  @IsString()
  @IsOptional()
  exampleId: string;

  @IsString()
  mediaId: string;
}
