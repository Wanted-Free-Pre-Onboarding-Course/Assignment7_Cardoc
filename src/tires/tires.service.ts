import { trimRepository } from './../trims/trims.repository';
import { tireRepository } from './tires.repository';
import { GetTireDto } from './dto/getTire.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TiresService {
  constructor(
    @InjectRepository(tireRepository)
    private tireRepository: tireRepository,
    private trimRepository: trimRepository,
  ) {}

  async getTire(getTireDto: GetTireDto) {
    const usersTrim = await this.trimRepository.findTrimById(getTireDto);
    const userTrimArray = Object.values(usersTrim);
    const tires = [];
    for (const trim of userTrimArray) {
      tires.push(await this.tireRepository.getTire(trim));
    }
    return tires;
  }
}
