import { IsString, IsEnum, IsOptional, IsInt, Min } from 'class-validator';
import { Level } from '../../generated/prisma';
import { Type } from 'class-transformer';

export class CreateLessonDto {
  @IsInt()
  @Min(1)
  @Type(() => Number)
  lessonNumber!: number; // Số bài học

  @IsString()
  @IsOptional()
  source?: string; // minna no nihongo? || soumatome?

  @IsEnum(Level)
  level!: Level;

  // KHÔNG thêm vocabularyIds, grammarIds, kanjiIds vào đây
  // Vì Vocabulary, Grammar, Kanji sẽ tự link đến Lesson khi tạo
}