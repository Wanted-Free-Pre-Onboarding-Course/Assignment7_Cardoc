import { SigninRequestDto } from './dto/signin.request.dto';
import { userRepository } from './users.repository';
import { SignupRequestDto } from './dto/signup.request.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt.payload';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(userRepository)
    private userRepository: userRepository,
    private jwtService: JwtService,
  ) {}

  async signup(
    signupRequestDto: SignupRequestDto,
  ): Promise<{ userId: number }> {
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

  async signin(
    signinRequestDto: SigninRequestDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = signinRequestDto;

    const user = await this.userRepository.findUser(email);
    if (user && (await bcrypt.compare(password, user['password']))) {
      const payload: JwtPayload = { email };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
