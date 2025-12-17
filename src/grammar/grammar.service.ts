import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGrammarDto } from './dto/create-grammar.dto';
import { UpdateGrammarDto } from './dto/update-grammar.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GrammarService {
  constructor(private prismaService: PrismaService) {}

  async create(createGrammarDto: CreateGrammarDto) {
    try {
      return await this.prismaService.grammar.create({
        data: {
          ...createGrammarDto,
        },
      });
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      return this.prismaService.grammar.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findOne(id: number) {
    const grammar = await this.prismaService.grammar.findUnique({
      where: { id },
    });

    if (!grammar) {
      throw new NotFoundException(`Grammar with ID ${id} not found`);
    }
    return grammar;
  }

  async update(id: number, updateGrammarDto: UpdateGrammarDto) {
    const existingGrammar = await this.prismaService.grammar.findUnique({
      where: { id },
    });

    if (!existingGrammar) {
      throw new NotFoundException(`Grammar with ID ${id} not found`);
    }

    return await this.prismaService.grammar.update({
      where: { id },
      data: updateGrammarDto,
    });
  }

  async remove(id: number) {
    const existingGrammar = await this.prismaService.grammar.findUnique({
      where: { id },
    });

    if (!existingGrammar) {
      throw new NotFoundException(`Grammar with ID ${id} not found`);
    }

    return await this.prismaService.grammar.delete({
      where: { id },
    });
  }
}
