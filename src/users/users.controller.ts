import { SignupRequestDto } from './dto/signup.request.dto';
import { HttpExceptionFilter } from './../common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  UseInterceptors,
  Body,
} from '@nestjs/common';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async signup(@Body() body: SignupRequestDto) {
    console.log(body);
    return 'signup';
    // return this.userService.getHello();
  }
}
