import { TireGetTireDto } from './dto/swagger/success/getTire.success.dto';
import { TiresService } from './tires.service';
import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import {
  Controller,
  Param,
  UseGuards,
  UseInterceptors,
  Get,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetTireDto } from './dto/getTire.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tires')
@UseInterceptors(SuccessInterceptor)
export class TiresController {
  constructor(private readonly trieService: TiresService) {}

  @ApiResponse({
    status: 200,
    description: '타이어 조회 성공',
    type: TireGetTireDto,
  })
  @ApiOperation({ summary: '타이어 정보 조회' })
  @Get('/:userId')
  @UseGuards(AuthGuard())
  getTire(@Param('userId', ParseIntPipe) userId: number) {
    return this.trieService.getTire(new GetTireDto(userId));
  }
}
