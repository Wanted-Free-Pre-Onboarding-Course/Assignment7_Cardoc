import { HttpExceptionFilter } from './../common/exceptions/http-exception.filter';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';

@Controller('users')
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  getHello(@Param('id', ParseIntPipe) param: number): string {
    console.log(param);
    console.log(typeof param);
    return this.userService.getHello();
  }
}
