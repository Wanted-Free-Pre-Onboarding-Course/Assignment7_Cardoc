import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class TrimRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  trimId: number;

  constructor(email: string, trimId: number) {
    this.email = email;
    this.trimId = trimId;
  }
}
