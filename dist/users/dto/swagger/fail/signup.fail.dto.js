"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignupConflictDto = exports.UserSignupBadRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserSignupBadRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'isSuccess?',
    }),
    __metadata("design:type", Boolean)
], UserSignupBadRequestDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2021-11-28T10:59:15.964Z',
        description: '요청 시간',
    }),
    __metadata("design:type", Date)
], UserSignupBadRequestDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '400',
        description: '응답 코드',
    }),
    __metadata("design:type", Number)
], UserSignupBadRequestDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '["name should not be empty", "name must be a string"]',
        description: '응답 메시지',
    }),
    __metadata("design:type", Array)
], UserSignupBadRequestDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bad Request',
        description: '에러 상태',
    }),
    __metadata("design:type", String)
], UserSignupBadRequestDto.prototype, "error", void 0);
exports.UserSignupBadRequestDto = UserSignupBadRequestDto;
class UserSignupConflictDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'isSuccess?',
    }),
    __metadata("design:type", Boolean)
], UserSignupConflictDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2021-11-28T10:59:15.964Z',
        description: '요청 시간',
    }),
    __metadata("design:type", Date)
], UserSignupConflictDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '409',
        description: '응답 코드',
    }),
    __metadata("design:type", Number)
], UserSignupConflictDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '같은 이메일로 가입되어 있습니다.',
        description: '응답 메시지',
    }),
    __metadata("design:type", String)
], UserSignupConflictDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Conflict',
        description: '에러 상태',
    }),
    __metadata("design:type", String)
], UserSignupConflictDto.prototype, "error", void 0);
exports.UserSignupConflictDto = UserSignupConflictDto;
//# sourceMappingURL=signup.fail.dto.js.map