import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKanjiDto } from './dto/create-kanji.dto';
import { UpdateKanjiDto } from './dto/update-kanji.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryKanjiDto } from './dto/query-kanji.dto';

@Injectable()
export class KanjiService {
  constructor(private prismaService: PrismaService) {}

  async create(createKanjiDto: CreateKanjiDto) {
    try {
      const { lessonId, ...kanjiData } = createKanjiDto;
      return await this.prismaService.kanji.create({
        data: {
          ...kanjiData,
          lesson: {
            connect: { id: lessonId },
          },
        },
      });
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async findAll(page: number = 1, limit: number = 10) {
    try {
      const skip = (page - 1) * limit;
      const take = limit;
      const [data, total] = await this.prismaService.$transaction([
        this.prismaService.kanji.findMany({
          skip,
          take,
          orderBy: { createdAt: 'desc' },
        }),
        this.prismaService.kanji.count(),
      ]);

      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getFlashcards(dto: QueryKanjiDto & { quantity?: number }) {
    return await this.prismaService.kanji.findMany({
      where: { level: dto.level },
    });
  }

  async findOne(id: string) {
    const kanji = await this.prismaService.kanji.findUnique({
      where: { id },
    });

    if (!kanji) {
      throw new NotFoundException(`Kanji with ID ${id} not found`);
    }
    return kanji;
  }

  async update(id: string, updateKanjiDto: UpdateKanjiDto) {
    const existingKanji = await this.prismaService.kanji.findUnique({
      where: { id },
    });

    if (!existingKanji) {
      throw new NotFoundException(`Kanji with ID ${id} not found`);
    }

    return await this.prismaService.kanji.update({
      where: { id },
      data: updateKanjiDto,
    });
  }

  async remove(id: string) {
    const existingKanji = await this.prismaService.kanji.findUnique({
      where: { id },
    });

    if (!existingKanji) {
      throw new NotFoundException(`Kanji with ID ${id} not found`);
    }

    return await this.prismaService.kanji.delete({
      where: { id },
    });
  }
}
