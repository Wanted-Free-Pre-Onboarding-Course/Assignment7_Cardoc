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
exports.TiresController = void 0;
const getTire_success_dto_1 = require("./dto/swagger/success/getTire.success.dto");
const tires_service_1 = require("./tires.service");
const success_interceptor_1 = require("./../common/interceptors/success.interceptor");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const getTire_dto_1 = require("./dto/getTire.dto");
const swagger_1 = require("@nestjs/swagger");
let TiresController = class TiresController {
    constructor(trieService) {
        this.trieService = trieService;
    }
    getTire(userId) {
        return this.trieService.getTire(new getTire_dto_1.GetTireDto(userId));
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '타이어 조회 성공',
        type: getTire_success_dto_1.TireGetTireDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '타이어 정보 조회' }),
    (0, common_1.Get)('/:userId'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TiresController.prototype, "getTire", null);
TiresController = __decorate([
    (0, common_1.Controller)('tires'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [tires_service_1.TiresService])
], TiresController);
exports.TiresController = TiresController;
//# sourceMappingURL=tires.controller.js.map