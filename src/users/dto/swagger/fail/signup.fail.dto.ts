import { ApiProperty } from '@nestjs/swagger';

export class UserSignupBadRequestDto {
  @ApiProperty({
    example: false,
    description: 'isSuccess?',
  })
  success: boolean;

  @ApiProperty({
    example: '2021-11-28T10:59:15.964Z',
    description: '요청 시간',
  })
  timestamp: Date;

  @ApiProperty({
    example: '400',
    description: '응답 코드',
  })
  statusCode: number;

  @ApiProperty({
    example: '["name should not be empty", "name must be a string"]',
    description: '응답 메시지',
  })
  message: string[];

  @ApiProperty({
    example: 'Bad Request',
    description: '에러 상태',
  })
  error: string;
}

export class UserSignupConflictDto {
  @ApiProperty({
    example: false,
    description: 'isSuccess?',
  })
  success: boolean;

  @ApiProperty({
    example: '2021-11-28T10:59:15.964Z',
    description: '요청 시간',
  })
  timestamp: Date;

  @ApiProperty({
    example: '409',
    description: '응답 코드',
  })
  statusCode: number;

  @ApiProperty({
    example: '같은 이메일로 가입되어 있습니다.',
    description: '응답 메시지',
  })
  message: string;

  @ApiProperty({
    example: 'Conflict',
    description: '에러 상태',
  })
  error: string;
}
