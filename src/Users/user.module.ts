import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.provider';
import { userProviders } from 'src/providers/users.provider';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UsersService,
  ],
  controllers: [UsersController]
  
})
export class UsersModule {}