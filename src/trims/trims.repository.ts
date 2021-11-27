import { EntityRepository, Repository } from 'typeorm';
import { TrimEntity } from './trims.entity';

import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(TrimEntity)
export class trimRepository extends Repository<TrimEntity> {
  async createTrim(trims: object, user: object): Promise<object> {
    return this.create({
      trimId: trims['trimId'],
      trimName: trims['trimName'],
      user,
    });
  }

  async savedTrim(trim: object): Promise<object> {
    try {
      return await this.save(trim);
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new ConflictException('같은 trim 정보가 저장되어 있습니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findTrim(trim: object): Promise<object> {
    try {
      return await this.findOne(trim);
    } catch (err) {
      throw err;
    }
  }
}
