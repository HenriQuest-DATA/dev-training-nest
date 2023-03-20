import { CoursesService } from './courses/courses.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { TestesController } from './testes/testes.controller';
import { ParametrosController } from './parametros/parametros.controller';
import { ParametrosService } from './parametros/parametros.service';

@Module({
  imports: [CoursesModule],
  controllers: [
    AppController,
    CoursesController,
    TestesController,
    ParametrosController,
  ],
  providers: [AppService, CoursesService, ParametrosService],
})
export class AppModule {}
