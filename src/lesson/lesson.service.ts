import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LessonService {
  constructor(private prismaService: PrismaService) {}

  async create(createLessonDto: CreateLessonDto) {
    try {
      return await this.prismaService.lesson.create({
        data: {
          ...createLessonDto,
        },
      });
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return this.prismaService.lesson.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: number) {
    const lesson = await this.prismaService.lesson.findUnique({
      where: { id },
    });

    if (!lesson) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }
    return lesson;
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const existingLesson = await this.prismaService.lesson.findUnique({
      where: { id },
    });

    if (!existingLesson) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }

    return await this.prismaService.lesson.update({
      where: { id },
      data: updateLessonDto,
    });
  }

  async remove(id: number) {
    const existingLesson = await this.prismaService.lesson.findUnique({
      where: { id },
    });

    if (!existingLesson) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }

    return await this.prismaService.lesson.delete({
      where: { id },
    });
  }
}
