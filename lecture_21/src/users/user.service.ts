import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDTO } from "./DTO/create.dto";

@Injectable()
export class UserService{
    users = [
        {
            id: 1,
            name: "elene",
            age: 21,
        },
        {
            id: 2,
            name: "elene",
            age: 21,
        },
    ]

    getAllUsers() {
        return this.users;
    }

    getUserById(id:number) {
        let user = this.users.find(el => el.id === Number(id))
        if(!user) throw new HttpException("user not found", HttpStatus.NOT_FOUND)
        return user;
    }

    createUser(body: UserDTO) {
        let lastId = this.users[this.users.length - 1]?.id || 0;
        const newObj = {
            id: lastId + 1,
            name: body.name,
            age: body.age
        }
        this.users.push(newObj)
        return newObj;
    }

    updateUser(id: number, body:UserDTO) {
        const index = this.users.findIndex(user => user.id === Number(id))
        if(index === -1) throw new HttpException('user not found', HttpStatus.NOT_FOUND);
        
        this.users[index] = {
            ...this.users[index],
            name: body.name || this.users[index].name,
            age: body.age || this.users[index].age
        }
        
        return this.users[index];
    }

    deleteUser(id: number){
        const index = this.users.findIndex(el => el.id === Number(id))
        if(index === -1) throw new HttpException("user not found", HttpStatus.NOT_FOUND)
        const deletedUser = this.users.splice(index, 1)
        return deletedUser;
    }
}