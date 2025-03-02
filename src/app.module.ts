import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [CoursesModule, StudentsModule],
})
export class AppModule {}
