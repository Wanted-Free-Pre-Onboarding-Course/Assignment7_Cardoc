import { TrimEntity } from 'src/trims/trims.entity';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['id'])
export class TireEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'tireName' })
  tireName: string;

  @Column({ name: 'tireWidth' })
  tireWidth: number;

  @Column({ name: 'tireAspectRatio' })
  tireAspectRatio: number;

  @Column({ name: 'tireDiameter' })
  tireDiameter: number;

  @Column({ name: 'tireUnit' })
  tireUnit: string;

  @Column({ name: 'tireMultiValues' })
  tireMultiValues: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @OneToOne(() => TrimEntity)
  @JoinColumn({ name: 'trimId' })
  trim: TrimEntity;
}
