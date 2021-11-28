import { ApiProperty } from '@nestjs/swagger';

export class TrimCreateTrimDto {
  @ApiProperty({
    example: true,
    description: 'isSuccess?',
  })
  success: boolean;
}
