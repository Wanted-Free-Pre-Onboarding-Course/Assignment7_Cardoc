import { BaseEntity } from 'typeorm';
export declare class TireEntity extends BaseEntity {
    id: number;
    frontTireName: string;
    frontTireWidth: number;
    frontTireAspectRatio: number;
    frontTireDiameter: number;
    frontTireUnit: string;
    frontTireMultiValues: string;
    rearTireName: string;
    rearTireWidth: number;
    rearTireAspectRatio: number;
    rearTireDiameter: number;
    rearTireUnit: string;
    rearTireMultiValues: string;
    trimId: number;
    createdAt: Date;
}
