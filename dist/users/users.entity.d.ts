import { TrimEntity } from 'src/trims/trims.entity';
import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity {
    id: number;
    email: string;
    password: string;
    name: string;
    trim: TrimEntity[];
}
