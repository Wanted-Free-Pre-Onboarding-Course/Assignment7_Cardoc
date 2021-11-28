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
export class TireEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'frontTireName' })
  frontTireName: string;

  @Column({ name: 'frontTireWidth' })
  frontTireWidth: number;

  @Column({ name: 'frontTireAspectRatio' })
  frontTireAspectRatio: number;

  @Column({ name: 'frontTireDiameter' })
  frontTireDiameter: number;

  @Column({ name: 'frontTireUnit' })
  frontTireUnit: string;

  @Column({ name: 'frontTireMultiValues' })
  frontTireMultiValues: string;

  @Column({ name: 'rearTireName' })
  rearTireName: string;

  @Column({ name: 'rearTireWidth' })
  rearTireWidth: number;

  @Column({ name: 'rearTireAspectRatio' })
  rearTireAspectRatio: number;

  @Column({ name: 'rearTireDiameter' })
  rearTireDiameter: number;

  @Column({ name: 'rearTireUnit' })
  rearTireUnit: string;

  @Column({ name: 'rearTireMultiValues' })
  rearTireMultiValues: string;

  @Column({ name: 'trimId' })
  trimId: number;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;
}
