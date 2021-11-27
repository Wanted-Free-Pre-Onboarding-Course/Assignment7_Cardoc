import { UserEntity } from 'src/users/users.entity';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['id'])
export class TrimEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'trimId' })
  trimId: string;

  @Column({ name: 'trimName' })
  trimName: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.trim, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
