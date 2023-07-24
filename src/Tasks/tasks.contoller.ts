import { Controller, Post, Get, Param, Body, Patch, ParseIntPipe, Delete, Put } from "@nestjs/common";
import { TaskService } from "./tasks.service";
import { CreateTaskDto } from "src/dtos/tasks-dto";

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  
@Post()
postTask(@Body() taskDetails: CreateTaskDto) {
    return this.taskService.postTask(taskDetails)
    }

  @Get()
   find()
     {
        return this.taskService.fetchPosts()
        }
  

  @Get(':id')

    findOne(@Param('id') id: number) {
        return this.taskService.getById(id);
    }

    @Put(':id')
  update(@Param('id') id: number, @Body() updateTaskDetails: CreateTaskDto) {
    return this.taskService.updateTask(id,updateTaskDetails);
  }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.taskService.remove(id);
  // }
    
   
//    @Delete(':id')
  
//    deleteById(@Param('id') id: number) {
//        return this.taskService.deleteById(id)
//    }
   



 }