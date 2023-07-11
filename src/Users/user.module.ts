import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.provider';
import { userProviders } from 'src/providers/users.provider';
import { UsersService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    UsersService,
  ],
})
export class UsersModule {}