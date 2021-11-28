import { SigninRequestDto } from './dto/signin.request.dto';
import { SignupRequestDto } from './dto/signup.request.dto';
import { UsersService } from './users.service';
import { Response } from 'express';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    signup(signupRequestDto: SignupRequestDto): Promise<{
        userId: number;
    }>;
    signin(signinRequestDto: SigninRequestDto, response: Response): Promise<{
        accessToken: string;
    }>;
}
