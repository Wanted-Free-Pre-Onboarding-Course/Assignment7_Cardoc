import { tireRepository } from './../tires/tires.repository';
import { trimRepository } from './trims.repository';
import { userRepository } from './../users/users.repository';
import { Module } from '@nestjs/common';
import { TrimsController } from './trims.controller';
import { TrimsService } from './trims.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([userRepository, trimRepository, tireRepository]),
  ],
  controllers: [TrimsController],
  providers: [TrimsService],
})
export class TrimsModule {}
