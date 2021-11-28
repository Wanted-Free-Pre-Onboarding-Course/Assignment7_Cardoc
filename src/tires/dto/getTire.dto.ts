import { IsNotEmpty, IsNumber } from 'class-validator';

export class GetTireDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }
}
