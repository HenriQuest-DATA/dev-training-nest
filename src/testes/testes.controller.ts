import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('testes')
export class TestesController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getTestIntoApp();
  }

  @Get('list')
  getHelloList(): string {
    return this.appService.getTestListIntoApp();
  }
}
