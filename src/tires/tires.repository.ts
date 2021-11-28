import { EntityRepository, Repository } from 'typeorm';
import { TireEntity } from './tires.entity';
import { TrimEntity } from 'src/trims/trims.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(TireEntity)
export class tireRepository extends Repository<TireEntity> {
  async createTire(frontTire: object, rearTire: object): Promise<object> {
    return this.create({
      frontTireName: frontTire['name'],
      frontTireWidth: frontTire['width'],
      frontTireAspectRatio: frontTire['aspectRatio'],
      frontTireDiameter: frontTire['diameter'],
      frontTireUnit: frontTire['unit'],
      frontTireMultiValues: frontTire['multiValues'],
      rearTireName: rearTire['name'],
      rearTireWidth: rearTire['width'],
      rearTireAspectRatio: rearTire['aspectRatio'],
      rearTireDiameter: rearTire['diameter'],
      rearTireUnit: rearTire['unit'],
      rearTireMultiValues: rearTire['multiValues'],
      trimId: frontTire['trimId'],
    });
  }

  async savedTire(tire: object): Promise<object> {
    try {
      return await this.save(tire);
    } catch (error) {
      console.log(error);
      if (error.code === '23505') {
        throw new ConflictException('같은 tire 정보가 저장되어 있습니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findTire(tire: object): Promise<object> {
    try {
      return await this.findOne(tire);
    } catch (err) {
      throw err;
    }
  }

  async getTire(tire: object): Promise<object> {
    try {
      return await this.createQueryBuilder('tire')
        .where('tire.trimId=:trimId', tire)
        .getOne();
    } catch (err) {
      throw err;
    }
  }
}
