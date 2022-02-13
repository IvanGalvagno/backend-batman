import { Injectable } from "@nestjs/common"
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator"
import { UserService } from "../user.service"

@Injectable()
@ValidatorConstraint()
export class isUniqueNickNameConstraint implements ValidatorConstraintInterface {

    constructor(private userService: UserService) {    }
    validate(nickname: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.userService.findByName(nickname)
    }
}

export function isUniqueNickName(validationOptions?: ValidationOptions) {
    return function (object:Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: isUniqueNickNameConstraint,
        })
    }
}