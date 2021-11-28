import { ApiProperty } from '@nestjs/swagger';

export class UserSigninDto {
  @ApiProperty({
    example: true,
    description: 'isSuccess?',
  })
  success: boolean;

  @ApiProperty({
    example: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q4QHRlc3QuY29tIiwiaWF0IjoxNjM4MDk5MzE0LCJleHAiOjE2MzgxMDI5MTR9.ht4DKWGVGLY7Pm0yvCuIZspIuKfGKSmkC_5281ADGJA',
    },
    description: 'token',
  })
  data: { accessToken: string };
}
