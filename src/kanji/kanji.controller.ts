import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { KanjiService } from './kanji.service';
import { CreateKanjiDto } from './dto/create-kanji.dto';
import { UpdateKanjiDto } from './dto/update-kanji.dto';

@Controller('kanji')
export class KanjiController {
  constructor(private readonly kanjiService: KanjiService) {}

  @Post()
  async create(@Body() createKanjiDto: CreateKanjiDto) {
    try {
      return await this.kanjiService.create(createKanjiDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    return this.kanjiService.findAll(+page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kanjiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKanjiDto: UpdateKanjiDto) {
    return this.kanjiService.update(id, updateKanjiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kanjiService.remove(id);
  }
}
