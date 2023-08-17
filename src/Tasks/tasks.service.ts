import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/users';
import { CreateTaskDto } from 'src/dtos/tasks-dto';
import { Task } from 'src/entities/tasks';
import { response } from 'express';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}


async postTask(taskDetails: CreateTaskDto) {
    try {
        const task =  this.taskRepository.create({...taskDetails})
        const savedTask= await this.taskRepository.save(task)
      
        return savedTask
    } catch (error) {
        return error
    }
}

  fetchPosts(){
    return this.taskRepository.find()
}

getById(id: number){
return this.taskRepository.findOneById(id);
}



       async updateTask(id: number, updateTaskDetails: CreateTaskDto) {
        await this.taskRepository.update({id}, {...updateTaskDetails})
    }

    async remove(id: number) {
        const response = await this.taskRepository.delete(id)
        

        return response

        
    }


}

