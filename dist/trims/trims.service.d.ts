import { tireRepository } from './../tires/tires.repository';
import { trimRepository } from './trims.repository';
import { userRepository } from './../users/users.repository';
import { TrimRequestDto } from 'src/trims/dto/createTrim.request.dto';
export declare class TrimsService {
    private userRepository;
    private trimRepository;
    private tireRepository;
    constructor(userRepository: userRepository, trimRepository: trimRepository, tireRepository: tireRepository);
    createTrim(trimRequestDto: TrimRequestDto[]): Promise<void>;
}
