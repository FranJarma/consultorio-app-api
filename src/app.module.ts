import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnsModule } from './turns/turns.module';
import { PatientsModule } from './patients/patients.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClinicalStoriesModule } from './clinical-stories/clinical-stories.module';
import { TotalCountMiddleware } from './common/middleware/total-count.middleware';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PatientsModule, TurnsModule, PrismaModule, ClinicalStoriesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TotalCountMiddleware).forRoutes('*');
  }
}
