import { SigninRequestDto } from './dto/signin.request.dto';
import { userRepository } from './users.repository';
import { SignupRequestDto } from './dto/signup.request.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private userRepository;
    private jwtService;
    constructor(userRepository: userRepository, jwtService: JwtService);
    signup(signupRequestDto: SignupRequestDto): Promise<{
        userId: number;
    }>;
    signin(signinRequestDto: SigninRequestDto): Promise<{
        accessToken: string;
    }>;
}
