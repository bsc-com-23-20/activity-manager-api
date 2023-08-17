import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/users';
import { CreateUserDto } from 'src/dtos/user-dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}


async signup(userDetails: CreateUserDto) {
    try {
        const user =  this.userRepository.create({...userDetails})
        const savedUser= await this.userRepository.save(user)
      
        return savedUser
    } catch (error) {
        return error
    }
}

  fetchPosts(){
    return this.userRepository.find()
}

getById(id: number){
return this.userRepository.findOneById(id);
}


async remove(id: number) {
    const response = await this.userRepository.delete(id)
}

}