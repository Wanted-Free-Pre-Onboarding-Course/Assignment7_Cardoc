import { TiresService } from './tires.service';
export declare class TiresController {
    private readonly trieService;
    constructor(trieService: TiresService);
    getTire(userId: number): Promise<any[]>;
}
