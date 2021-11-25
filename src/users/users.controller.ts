import { SignupRequestDto } from './dto/signup.request.dto';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { UsersService } from './users.service';
import { Controller, Post, UseInterceptors, Body } from '@nestjs/common';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  async signup(@Body() signupRequestDto: SignupRequestDto): Promise<object> {
    return await this.userService.signup(signupRequestDto);
  }
}
