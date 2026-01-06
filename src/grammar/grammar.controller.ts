import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GrammarService } from './grammar.service';
import { CreateGrammarDto } from './dto/create-grammar.dto';
import { UpdateGrammarDto } from './dto/update-grammar.dto';

@Controller('grammar')
export class GrammarController {
  constructor(private readonly grammarService: GrammarService) {}

  @Post()
  async create(@Body() createGrammarDto: CreateGrammarDto) {
    try {
      return await this.grammarService.create(createGrammarDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.grammarService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async findGrammarByLevel(@Param('level') level: string) {
    try {
      return await this.grammarService.findGrammarByLevel(level);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.grammarService.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrammarDto: UpdateGrammarDto) {
    return this.grammarService.update(id, updateGrammarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grammarService.remove(id);
  }
}
