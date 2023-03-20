import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getTest(): string {
    return this.coursesService.getTest();
  }

  @Patch(':id')
  patchCourse(@Param() params, @Body() body, @Res() resposta): object {
    return resposta.status(202).send(
      JSON.stringify({
        ...body,
        id: params.id,
        status: 202,
      }),
    );
  }

  @Delete(':id')
  deleteCourse(@Param('id') id, @Res() resposta): string {
    return resposta.status(301).send(`delete course id = ${id}`);
  }
}
