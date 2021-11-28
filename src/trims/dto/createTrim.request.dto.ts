import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TrimRequestDto {
  @ApiProperty({
    example: 'test@google.com',
    description: '이메일',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 5000,
    description: '이메일',
  })
  @IsNumber()
  @IsNotEmpty()
  trimId: number;

  constructor(email: string, trimId: number) {
    this.email = email;
    this.trimId = trimId;
  }
}
