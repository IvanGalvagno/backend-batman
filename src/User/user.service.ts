import { Injectable, Param } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    
    private users: Array<User> = [{
        id: 1,
        nickName: 'maffk',
        email: 'maffk@email.com',
        fullName: 'sgt. maffk',
        password: '12345',
        JoinData: new Date()
    }];
    
    /**
     * Create
     */
    public Create(user: User) {
        this.users.push(user)
        return user;
    }

    public findByName(name: string): User{
        const userFounded = this.users.find(user => user.nickName === name)  
        return userFounded;
    }

    public All(){
        return this.users
    }
}