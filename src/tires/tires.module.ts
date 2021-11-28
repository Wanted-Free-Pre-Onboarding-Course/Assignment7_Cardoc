import { trimRepository } from './../trims/trims.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { TiresController } from './tires.controller';
import { tireRepository } from './tires.repository';
import { TiresService } from './tires.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([tireRepository, trimRepository]),
    UsersModule,
  ],
  controllers: [TiresController],
  providers: [TiresService],
})
export class TiresModule {}
