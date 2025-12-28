import 'dotenv/config';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { LessonModule } from './lesson/lesson.module';
import { GrammarModule } from './grammar/grammar.module';
import { KanjiModule } from './kanji/kanji.module';

@Module({
  imports: [VocabularyModule, LessonModule, GrammarModule, KanjiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
