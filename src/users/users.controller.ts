import {
  UserSigninBadRequestDto,
  UserSigninUnauthorizedDto,
} from './dto/swagger/fail/signin.fail.dto';
import { UserSignupDto } from './dto/swagger/success/signup.success.dto';
import { SigninRequestDto } from './dto/signin.request.dto';
import { SignupRequestDto } from './dto/signup.request.dto';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { UsersService } from './users.service';
import { Controller, Post, UseInterceptors, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  UserSignupBadRequestDto,
  UserSignupConflictDto,
} from './dto/swagger/fail/signup.fail.dto';
import { UserSigninDto } from './dto/swagger/success/signin.success.dto';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiResponse({
    status: 201,
    description: '회원가입 성공',
    type: UserSignupDto,
  })
  @ApiResponse({
    status: 400,
    description: '모든 입력값을 입력해주세요.',
    type: UserSignupBadRequestDto,
  })
  @ApiResponse({
    status: 409,
    description: '같은 이메일로 가입되어 있습니다.',
    type: UserSignupConflictDto,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post('/signup')
  async signup(
    @Body() signupRequestDto: SignupRequestDto,
  ): Promise<{ userId: number }> {
    return await this.userService.signup(signupRequestDto);
  }

  @ApiResponse({
    status: 201,
    description: '로그인 성공',
    type: UserSigninDto,
  })
  @ApiResponse({
    status: 400,
    description: '모든 입력값을 입력해주세요.',
    type: UserSigninBadRequestDto,
  })
  @ApiResponse({
    status: 401,
    description: '비밀번호가 맞지 않습니다.',
    type: UserSigninUnauthorizedDto,
  })
  @ApiOperation({ summary: '로그인' })
  @Post('/signin')
  async signin(
    @Body() signinRequestDto: SigninRequestDto,
  ): Promise<{ accessToken: string }> {
    return await this.userService.signin(signinRequestDto);
  }
}
