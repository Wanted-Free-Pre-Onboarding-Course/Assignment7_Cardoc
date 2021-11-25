import { SignupRequestDto } from './dto/signup.request.dto';
import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './users.entity';

import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(UserEntity)
export class userRepository extends Repository<UserEntity> {
  async createUser(hashedSignupRequestDto: SignupRequestDto): Promise<object> {
    return this.create(hashedSignupRequestDto);
  }

  async savedUser(user: object): Promise<object> {
    try {
      const savedUser = await this.save(user);
      return { userId: savedUser.id };
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('같은 이메일로 가입되어 있습니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
