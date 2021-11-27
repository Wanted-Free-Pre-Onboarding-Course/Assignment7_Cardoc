import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { Controller, UseInterceptors, Post, Body } from '@nestjs/common';
import { TrimsService } from './trims.service';
import { TrimRequestDto } from 'src/trims/dto/createTrim.request.dto';

@Controller('trims')
@UseInterceptors(SuccessInterceptor)
export class TrimsController {
  constructor(private readonly trimService: TrimsService) {}

  @Post()
  createTrim(@Body() trimRequestDto: TrimRequestDto[]) {
    return this.trimService.createTrim(trimRequestDto);
  }
}
