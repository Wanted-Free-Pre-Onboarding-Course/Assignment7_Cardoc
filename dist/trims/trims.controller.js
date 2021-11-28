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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrimsController = void 0;
const createTrim_success_dto_1 = require("./dto/swagger/success/createTrim.success.dto");
const success_interceptor_1 = require("./../common/interceptors/success.interceptor");
const common_1 = require("@nestjs/common");
const trims_service_1 = require("./trims.service");
const createTrim_request_dto_1 = require("./dto/createTrim.request.dto");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const createTrim_fail_dto_1 = require("./dto/swagger/fail/createTrim.fail.dto");
let TrimsController = class TrimsController {
    constructor(trimService) {
        this.trimService = trimService;
    }
    createTrim(trimRequestDto) {
        return this.trimService.createTrim(trimRequestDto);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({ type: [createTrim_request_dto_1.TrimRequestDto] }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '타이어 정보 저장 성공',
        type: createTrim_success_dto_1.TrimCreateTrimDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '입력 데이터 개수가 5개를 초과됐거나 입력이 없는 경우',
        type: createTrim_fail_dto_1.TrimCreateTrimBadRequestDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '타이어 정보 저장' }),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], TrimsController.prototype, "createTrim", null);
TrimsController = __decorate([
    (0, common_1.Controller)('trims'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [trims_service_1.TrimsService])
], TrimsController);
exports.TrimsController = TrimsController;
//# sourceMappingURL=trims.controller.js.map