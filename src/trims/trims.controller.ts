import { TrimCreateTrimDto } from './dto/swagger/success/createTrim.success.dto';
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
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { TrimCreateTrimBadRequestDto } from './dto/swagger/fail/createTrim.fail.dto';

@Controller('trims')
@UseInterceptors(SuccessInterceptor)
export class TrimsController {
  constructor(private readonly trimService: TrimsService) {}

  @ApiBody({ type: [TrimRequestDto] })
  @ApiResponse({
    status: 201,
    description: '타이어 정보 저장 성공',
    type: TrimCreateTrimDto,
  })
  @ApiResponse({
    status: 400,
    description: '입력 데이터 개수가 5개를 초과됐거나 입력이 없는 경우',
    type: TrimCreateTrimBadRequestDto,
  })
  @ApiOperation({ summary: '타이어 정보 저장' })
  @Post()
  @UseGuards(AuthGuard())
  createTrim(@Body() trimRequestDto: TrimRequestDto[]) {
    return this.trimService.createTrim(trimRequestDto);
  }
}
