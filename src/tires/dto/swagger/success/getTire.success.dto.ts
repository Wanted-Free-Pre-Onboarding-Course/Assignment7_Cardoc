import { ApiProperty } from '@nestjs/swagger';

export class TireGetTireDto {
  @ApiProperty({
    example: true,
    description: 'isSuccess?',
  })
  success: boolean;

  @ApiProperty({
    example: {
      id: 59,
      frontTireName: '타이어 전',
      frontTireWidth: 225,
      frontTireAspectRatio: 60,
      frontTireDiameter: 16,
      frontTireUnit: '',
      frontTireMultiValues: '',
      rearTireName: '타이어 후',
      rearTireWidth: 225,
      rearTireAspectRatio: 60,
      rearTireDiameter: 16,
      rearTireUnit: '',
      rearTireMultiValues: '',
      trimId: 5000,
      createdAt: '2021-11-27T22:36:35.170Z',
    },
    description: 'data',
  })
  data: object[];
}
