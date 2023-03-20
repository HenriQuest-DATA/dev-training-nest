import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ParametrosService } from './parametros.service';

@Controller('parametros')
export class ParametrosController {
  constructor(private readonly parametrosService: ParametrosService) {}

  @Get(':id')
  getParametro(@Param() params, @Res() resposta): string {
    // return this.parametrosService.getComParametros(params.id);
    return resposta
      .status(300)
      .send(this.parametrosService.getComParametros(params.id));
    //possousar igualzinho ao do angular, basta chamar o método @Res como parâmetro da função
    //é ideal para reproduzir o uso em caso de try catch
  }

  @Get('direto/:id')
  getParametroDireto(@Param() params): string {
    return `O parametro direto é ${params.id}`;
  }

  @Get('direto/semParams/:id')
  getParametroDiretoNoParams(@Param('id') id: number): string {
    return `O parametro direto sem Params é ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Post('semBody')
  @HttpCode(HttpStatus.BAD_REQUEST) //o código aqui não aplica, porém é um exemplo
  createSemBody(@Body('name') name) {
    return name;
  }
}
