import { Module } from '@nestjs/common';
import { TrimsController } from './trims.controller';
import { TrimsService } from './trims.service';

@Module({
  controllers: [TrimsController],
  providers: [TrimsService],
})
export class TrimsModule {}
