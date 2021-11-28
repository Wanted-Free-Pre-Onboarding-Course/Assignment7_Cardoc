import { TrimsService } from './trims.service';
import { TrimRequestDto } from 'src/trims/dto/createTrim.request.dto';
export declare class TrimsController {
    private readonly trimService;
    constructor(trimService: TrimsService);
    createTrim(trimRequestDto: TrimRequestDto[]): Promise<void>;
}
