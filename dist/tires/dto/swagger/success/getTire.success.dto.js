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
exports.TireGetTireDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TireGetTireDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'isSuccess?',
    }),
    __metadata("design:type", Boolean)
], TireGetTireDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
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
    }),
    __metadata("design:type", Array)
], TireGetTireDto.prototype, "data", void 0);
exports.TireGetTireDto = TireGetTireDto;
//# sourceMappingURL=getTire.success.dto.js.map