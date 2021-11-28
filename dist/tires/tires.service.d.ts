import { trimRepository } from './../trims/trims.repository';
import { tireRepository } from './tires.repository';
import { GetTireDto } from './dto/getTire.dto';
export declare class TiresService {
    private tireRepository;
    private trimRepository;
    constructor(tireRepository: tireRepository, trimRepository: trimRepository);
    getTire(getTireDto: GetTireDto): Promise<any[]>;
}
