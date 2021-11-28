import { Repository } from 'typeorm';
import { TireEntity } from './tires.entity';
export declare class tireRepository extends Repository<TireEntity> {
    createTire(frontTire: object, rearTire: object): Promise<object>;
    savedTire(tire: object): Promise<object>;
    findTire(tire: object): Promise<object>;
    getTire(tire: object): Promise<object>;
}
