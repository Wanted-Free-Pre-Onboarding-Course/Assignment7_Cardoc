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
import { ApiOperation } from '@nestjs/swagger';

@Controller('tires')
@UseInterceptors(SuccessInterceptor)
export class TiresController {
  constructor(private readonly trieService: TiresService) {}

  @ApiOperation({ summary: '타이어 정보 조회' })
  @Get('/:userId')
  @UseGuards(AuthGuard())
  getTire(@Param('userId', ParseIntPipe) userId: number) {
    return this.trieService.getTire(new GetTireDto(userId));
  }
}