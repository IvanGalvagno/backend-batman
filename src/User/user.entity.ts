import { IsEmail, IsNotEmpty, IsString, Max, MaxLength, Min, MinLength } from "class-validator";
import { isUniqueNickName } from "./validator/isUniqueNickname.validator";

export class User {
    id: number;

    @isUniqueNickName({ message: 'nickName is already been used '})
    @IsNotEmpty({ message: 'nickname is required' })
    @MinLength(4, {message: 'nickName need to be at least 4 characteres'})
    @MaxLength(50, { message: 'nickName has to be less than 50 characteres'})
    @IsString()
    nickName: string;

    @IsEmail({},{  message: 'Invalid Email' })
    email: string;

    @IsNotEmpty({ message: 'password is required' })
    @MinLength(8, {message: 'password need to be at least 8 characteres'})
    @MaxLength(50, { message: 'password has to be less than 50 characteres'})
    password: string;

    @IsNotEmpty({  message: 'fullName is required' })
    @MinLength(4, {message: 'fullName has to be more than 3 characteres'})
    fullName: string;

    JoinData: Date;
}