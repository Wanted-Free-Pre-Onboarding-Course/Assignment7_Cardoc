import { userRepository } from './users.repository';
import { SignupRequestDto } from './dto/signup.request.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(userRepository)
    private userRepository: userRepository,
  ) {}

  async signup(signupRequestDto: SignupRequestDto): Promise<object> {
    const { email, password, name } = signupRequestDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const hashedSignupRequestDto = new SignupRequestDto(
      email,
      hashedPassword,
      name,
    );

    const user = await this.userRepository.createUser(hashedSignupRequestDto);
    const savedUser = await this.userRepository.savedUser(user);
    return { userId: savedUser['id'] };
  }
}
