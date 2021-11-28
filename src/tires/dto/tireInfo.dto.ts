import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TireInfoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  width: number;

  @IsNumber()
  @IsNotEmpty()
  aspectRatio: number;

  @IsNumber()
  @IsNotEmpty()
  diameter: number;

  @IsString()
  unit: string;

  @IsString()
  multiValues: string;

  @IsNumber()
  @IsNotEmpty()
  trimId: number;

  constructor(
    name: string,
    width: number,
    aspectRatio: number,
    diameter: number,
    unit: string,
    multiValues: string,
    trimId: number,
  ) {
    this.name = name;
    this.width = width;
    this.aspectRatio = aspectRatio;
    this.diameter = diameter;
    this.unit = unit;
    this.multiValues = multiValues;
    this.trimId = trimId;
  }
}
