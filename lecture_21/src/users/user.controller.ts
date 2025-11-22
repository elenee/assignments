import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./DTO/create.dto";

@Controller("/users")
export class UserController{
    constructor(private userService:UserService){}
    
    @Get()
    getUsers(){
        return this.userService.getAllUsers();
    }

    @Get(":id")
    getUserById(@Param() params){
        const id = params.id;
        return this.userService.getUserById(id);
    }

    @Post()
    createUser(@Body() body:UserDTO){
        return this.userService.createUser(body)
    }

    @Put(":id")
    updateUser(@Param() params, @Body() body:UserDTO){
        const id = params.id;
        return this.userService.updateUser(id, body)
    }

    @Delete(":id") 
    deleteUser(@Param() params){
        const id = params.id;
        return this.userService.deleteUser(id)
    }

}

