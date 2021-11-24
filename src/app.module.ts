import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, ConfigModule.forRoot()],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
