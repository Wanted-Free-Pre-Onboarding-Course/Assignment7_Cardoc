import { TireInfoDto } from 'src/tires/dto/tireInfo.dto';
import { TrimInfoDto } from 'src/trims/dto/trimInfo.dto';
export declare class splitTrim {
    private tireValue;
    private user;
    private frontTireValue;
    private rearTireValue;
    constructor(tireValue: any, user: any);
    private splitTireValue;
    private trimInfo;
    private frontTireInfo;
    private rearTireInfo;
    init(): {
        trimInfo: TrimInfoDto;
        frontTire: TireInfoDto;
        rearTire: TireInfoDto;
    };
}
