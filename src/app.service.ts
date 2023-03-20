import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTestIntoApp(): string {
    return 'Test into app provided!';
  }

  getTestListIntoApp(): string {
    return 'Test List into app provided!';
  }

  getHome(): string {
    return 'This is the home!';
  }
}
