import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { Validation } from 'src/middlewares';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {
  oconfigure(objMiddleware: MiddlewareConsumer) {
    objMiddleware
      .apply(Validation)
      .forRoutes({ path: '/students', method: RequestMethod.POST });
    objMiddleware
      .apply(Validation)
      .forRoutes({ path: '/students', method: RequestMethod.PUT });
  }
}
