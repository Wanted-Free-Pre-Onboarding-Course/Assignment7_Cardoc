import { ApiProperty } from '@nestjs/swagger';

export class UserSignupDto {
  @ApiProperty({
    example: true,
    description: 'isSuccess?',
  })
  success: boolean;

  @ApiProperty({
    example: { userId: 130 },
    description: 'userId',
  })
  data: { userId: number };
}
