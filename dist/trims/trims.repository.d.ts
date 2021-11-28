import { GetTireDto } from './../tires/dto/getTire.dto';
import { Repository } from 'typeorm';
import { TrimEntity } from './trims.entity';
export declare class trimRepository extends Repository<TrimEntity> {
    createTrim(trims: object, user: object): Promise<object>;
    savedTrim(trim: object): Promise<object>;
    findTrim(trim: object): Promise<object>;
    findTrimById(getTireDto: GetTireDto): Promise<object>;
}
