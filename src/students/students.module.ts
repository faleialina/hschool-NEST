import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { Validation } from 'src/middlewares';
import { StudController } from './students.controller';
import { StudService } from './students.service';

@Module({
  imports: [],
  controllers: [StudController],
  providers: [StudService],
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
