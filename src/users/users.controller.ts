import { SigninRequestDto } from './dto/signin.request.dto';
import { SignupRequestDto } from './dto/signup.request.dto';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { UsersService } from './users.service';
import { Controller, Post, UseInterceptors, Body } from '@nestjs/common';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  async signup(
    @Body() signupRequestDto: SignupRequestDto,
  ): Promise<{ userId: number }> {
    return await this.userService.signup(signupRequestDto);
  }

  @Post('/signin')
  async signin(
    @Body() signinRequestDto: SigninRequestDto,
  ): Promise<{ accessToken: string }> {
    return await this.userService.signin(signinRequestDto);
  }
}
