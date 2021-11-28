import { SignupRequestDto } from './dto/signup.request.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
export declare class userRepository extends Repository<UserEntity> {
    createUser(hashedSignupRequestDto: SignupRequestDto): Promise<object>;
    savedUser(user: object): Promise<object>;
    findUser(email: string): Promise<object>;
}
