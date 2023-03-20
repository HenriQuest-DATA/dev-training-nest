import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  getTest(): string {
    return 'This is a test!';
  }
}
