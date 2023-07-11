import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './Users/user.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

// @Module({
//   imports: [AuthModule, TutorModule, ReviewModule ,TypeOrmModule.forRoot(tutorshubDataSource)],
//   controllers: [],
//   providers: [],
// })