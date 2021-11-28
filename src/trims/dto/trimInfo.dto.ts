import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TrimInfoDto {
  @IsNumber()
  @IsNotEmpty()
  trimId: number;

  @IsString()
  @IsNotEmpty()
  trimName: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  constructor(trimId: number, trimName: string, userId: number) {
    this.trimId = trimId;
    this.trimName = trimName;
    this.userId = userId;
  }
}
