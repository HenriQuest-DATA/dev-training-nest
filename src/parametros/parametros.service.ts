import { Injectable } from '@nestjs/common';

@Injectable()
export class ParametrosService {
  getComParametros(id: number): string {
    return `O valor do parâmetro é ${id}`;
  }
}
