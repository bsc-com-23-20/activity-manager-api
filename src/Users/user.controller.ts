import { Controller, Post, Get, Param, Body } from "@nestjs/common";
import { UsersService } from "./user.service";
import { CreateUserDto } from "src/dtos/user-dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

//   @Post()
//   create(@Body() createUserDto: CreateUserDto) {
//     return this.usersService.create(createUserDto);
//   }
@Post('signup')
signup(@Body() userDetails: CreateUserDto) {
    return this.usersService.signup(userDetails)
    }

  @Get()
   find()
     {
        return this.usersService.fetchPosts()
        }
  

  @Get(':id')

    findOne(@Param('id') id: number) {
        return this.usersService.getById(id);
    }


 }