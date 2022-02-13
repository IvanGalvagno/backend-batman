import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    
    constructor(private userService: UserService) {
    }

    @Post()
    public create(@Body() user : User): User{
        const userCreated = this.userService.Create(user)
        return userCreated;       
    }

    @Get(':nickName')
    public findByName(@Param('nickName') nickname: string): User{
        const user = this.userService.findByName(nickname);
        return user;
    }

    @Get()
    public all(){
        return this.userService.All()
    }
}