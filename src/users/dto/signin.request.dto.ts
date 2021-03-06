import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class SigninRequestDto {
  @ApiProperty({
    example: 'test@google.com',
    description: '이메일',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'Abc1234!',
    description: '비밀번호',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
    {
      message:
        '하나 이상의 소문자, 대문자, 숫자 및 특수 문자를 포함하는 8~20자 비밀번호를 입력하세요',
    },
  )
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
