import { ApiProperty } from '@nestjs/swagger';

export class TrimCreateTrimBadRequestDto {
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
    example: '입력 데이터 개수가 5개를 초과했거나, 입력이 없습니다.',
    description: '응답 메시지',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
    description: '에러 상태',
  })
  error: string;
}
