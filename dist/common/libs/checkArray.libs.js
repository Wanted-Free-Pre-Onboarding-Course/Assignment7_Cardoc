"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInvalidArray = void 0;
const createTrim_request_dto_1 = require("../../trims/dto/createTrim.request.dto");
const common_1 = require("@nestjs/common");
const trim_constants_1 = require("../../trims/constants/trim.constants");
const isInvalidArray = (trimRequestDto) => {
    if (typeof trimRequestDto !== 'object')
        throw new common_1.BadRequestException(trim_constants_1.TRIMS_ERROR_MSG.INVALID_INPUT_DATA);
    if (trimRequestDto.length === 0)
        throw new common_1.BadRequestException(trim_constants_1.TRIMS_ERROR_MSG.NO_INPUT_DATA);
    if (trimRequestDto.length > trim_constants_1.TRIMS_CONSTANTS.TRIMS_DTO_LENGTH_LIMIT)
        throw new common_1.BadRequestException(trim_constants_1.TRIMS_ERROR_MSG.EXCEED_INPUT_DATA);
};
exports.isInvalidArray = isInvalidArray;
//# sourceMappingURL=checkArray.libs.js.map