import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  getCourses(): string {
    return 'Hello World!';
  }
}
