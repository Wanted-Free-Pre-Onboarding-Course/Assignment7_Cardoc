import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import {
  Controller,
  UseInterceptors,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TrimsService } from './trims.service';
import { TrimRequestDto } from 'src/trims/dto/createTrim.request.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';

@Controller('trims')
@UseInterceptors(SuccessInterceptor)
export class TrimsController {
  constructor(private readonly trimService: TrimsService) {}

  @ApiOperation({ summary: '타이어 정보 저장' })
  @Post()
  @UseGuards(AuthGuard())
  createTrim(@Body() trimRequestDto: TrimRequestDto[]) {
    return this.trimService.createTrim(trimRequestDto);
  }
}
