import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.provider';
import { TaskService } from './tasks.service';
import { taskProviders } from 'src/providers/tasks.provider';
import { TaskController } from './tasks.contoller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...taskProviders,
    TaskService,
  ],
  controllers: [TaskController]
  
})
export class TaskModule {}