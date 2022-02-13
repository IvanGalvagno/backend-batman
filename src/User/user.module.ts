import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { isUniqueNickNameConstraint } from "./validator/isUniqueNickname.validator";

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        isUniqueNickNameConstraint,
    ]
})
export class UserModule{}