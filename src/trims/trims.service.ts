import { tireRepository } from './../tires/tires.repository';
import { trimRepository } from './trims.repository';
import { userRepository } from './../users/users.repository';
import { splitTrim } from './../common/libs/splitTrim.libs';
import { myCarJobs } from './../common/jobs/mycar.jobs';
import { isInvalidArray } from '../common/libs/checkArray.libs';
import { TrimRequestDto } from 'src/trims/dto/createTrim.request.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { TRIMS_ERROR_MSG, regExp } from './constants/trim.constants';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TrimsService {
  constructor(
    @InjectRepository(userRepository)
    private userRepository: userRepository,
    private trimRepository: trimRepository,
    private tireRepository: tireRepository,
  ) {}

  async createTrim(trimRequestDto: TrimRequestDto[]) {
    isInvalidArray(trimRequestDto);

    for (const trim of trimRequestDto) {
      const userEmail = trim.email;
      const trimId = trim.trimId;

      const requiredValues = await myCarJobs(trimId);

      if (!requiredValues.frontTireValue || !requiredValues.rearTireValue)
        throw new BadRequestException(TRIMS_ERROR_MSG.EMPTY_TIRE_VALUE);

      if (
        !regExp.test(requiredValues.frontTireValue) ||
        !regExp.test(requiredValues.rearTireValue)
      )
        throw new BadRequestException(TRIMS_ERROR_MSG.INVALID_TIRE_DATA);

      const user = await this.userRepository.findUser(userEmail);

      const { trimInfo, frontTire, rearTire } = new splitTrim(
        requiredValues,
        user,
      ).init();

      const _trim = await this.trimRepository.createTrim(trimInfo, user);
      const findTrim = await this.trimRepository.findTrim(_trim);
      if (!findTrim) await this.trimRepository.savedTrim(_trim);

      const _tire = await this.tireRepository.createTire(frontTire, rearTire);
      const findTire = await this.tireRepository.findTire(_tire);
      if (!findTire) await this.tireRepository.savedTire(_tire);
    }
    return;
  }
}
