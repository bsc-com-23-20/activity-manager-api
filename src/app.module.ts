import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './Users/user.module';
import { TaskModule } from './Tasks/tasks.module';

@Module({
  imports: [UsersModule,TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

