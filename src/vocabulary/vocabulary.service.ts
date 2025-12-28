import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVocabularyDto } from './dto/create-vocabulary.dto';
import { UpdateVocabularyDto } from './dto/update-vocabulary.dto';

@Injectable()
export class VocabularyService {
  constructor(private prismaService: PrismaService) {}

  async create(createVocabularyDto: CreateVocabularyDto) {
    try {
      const { kanjiId, lessonId, ...vocabularyData } = createVocabularyDto;
      return await this.prismaService.vocabulary.create({
        data: {
          ...vocabularyData,
          lesson: {
            connect: { id: lessonId },
          },
          kanjis: {
            connect: { id: kanjiId },
          },
        },
      });
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return this.prismaService.vocabulary.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} vocabulary`;
  }

  update(id: number, updateVocabularyDto: UpdateVocabularyDto) {
    return `This action updates a #${id} vocabulary`;
  }

  remove(id: number) {
    return `This action removes a #${id} vocabulary`;
  }
}
