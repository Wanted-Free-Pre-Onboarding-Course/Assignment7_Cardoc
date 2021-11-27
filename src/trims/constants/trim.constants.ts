export const TRIMS_CONSTANTS = {
  TRIMS_DTO_LENGTH_LIMIT: 5,
  CAR_SPEC_API_URL: 'https://dev.mycar.cardoc.co.kr/v1/trim/',
};

export const TRIMS_ERROR_MSG = {
  INVALID_INPUT_DATA: '입력 정보가 잘못되었습니다',
  NO_INPUT_DATA: '입력 데이터가 없습니다',
  EXCEED_INPUT_DATA: `입력 데이터 개수가 ${TRIMS_CONSTANTS.TRIMS_DTO_LENGTH_LIMIT}개를 초과하였습니다`,
  EMPTY_TIRE_VALUE: '타이어 규격 정보가 존재하지 않습니다.',
  INVALID_TIRE_DATA: '타이어 규격 양식이 맞지 않습니다',
};

export const regExp = /^[0-9]{3}\/[0-9]{2}[a-zA-Z]{1}[0-9]{2}/;
