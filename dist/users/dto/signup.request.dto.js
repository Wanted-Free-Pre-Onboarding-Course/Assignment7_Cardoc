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
exports.SignupRequestDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SignupRequestDto {
    constructor(email, password, name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'test@google.com',
        description: '이메일',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Abc1234!',
        description: '비밀번호',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/, {
        message: '하나 이상의 소문자, 대문자, 숫자 및 특수 문자를 포함하는 8~20자 비밀번호를 입력하세요',
    }),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '테스트',
        description: '고객 이름',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignupRequestDto.prototype, "name", void 0);
exports.SignupRequestDto = SignupRequestDto;
//# sourceMappingURL=signup.request.dto.js.map