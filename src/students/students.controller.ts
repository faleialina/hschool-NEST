import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller()
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getStudents(): string {
    return this.studentsService.getStudents();
  }
}
