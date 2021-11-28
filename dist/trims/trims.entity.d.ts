import { UserEntity } from 'src/users/users.entity';
import { BaseEntity } from 'typeorm';
export declare class TrimEntity extends BaseEntity {
    id: number;
    trimId: number;
    trimName: string;
    createdAt: Date;
    user: UserEntity;
}
