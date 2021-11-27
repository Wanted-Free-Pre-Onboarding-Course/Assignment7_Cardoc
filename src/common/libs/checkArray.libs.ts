import { TrimRequestDto } from 'src/trims/dto/createTrim.request.dto';
import { BadRequestException } from '@nestjs/common';
import {
  TRIMS_CONSTANTS,
  TRIMS_ERROR_MSG,
} from '../../trims/constants/trim.constants';

export const isInvalidArray = (trimRequestDto: TrimRequestDto[]): void => {
  if (typeof trimRequestDto !== 'object')
    throw new BadRequestException(TRIMS_ERROR_MSG.INVALID_INPUT_DATA);
  if (trimRequestDto.length === 0)
    throw new BadRequestException(TRIMS_ERROR_MSG.NO_INPUT_DATA);
  if (trimRequestDto.length > TRIMS_CONSTANTS.TRIMS_DTO_LENGTH_LIMIT)
    throw new BadRequestException(TRIMS_ERROR_MSG.EXCEED_INPUT_DATA);
};
