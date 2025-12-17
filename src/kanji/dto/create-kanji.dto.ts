import { IsString, IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { Level } from '../../generated/prisma';

export class CreateKanjiDto {
  @IsString()
  character: string;

  @IsString()
  @IsOptional()
  onyomi?: string;

  @IsString()
  @IsOptional()
  kunyomi?: string;

  @IsString()
  meaning: string;

  @IsEnum(Level)
  level: Level;

  @IsNumber()
  @Min(1)
  @IsOptional()
  strokeCount?: number;

  @IsString()
  @IsOptional()
  lessonId: string;
}
