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
exports.TireEntity = void 0;
const typeorm_1 = require("typeorm");
const trims_entity_1 = require("../trims/trims.entity");
let TireEntity = class TireEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frontTireName' }),
    __metadata("design:type", String)
], TireEntity.prototype, "frontTireName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frontTireWidth' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "frontTireWidth", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frontTireAspectRatio' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "frontTireAspectRatio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frontTireDiameter' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "frontTireDiameter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frontTireUnit' }),
    __metadata("design:type", String)
], TireEntity.prototype, "frontTireUnit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frontTireMultiValues' }),
    __metadata("design:type", String)
], TireEntity.prototype, "frontTireMultiValues", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rearTireName' }),
    __metadata("design:type", String)
], TireEntity.prototype, "rearTireName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rearTireWidth' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "rearTireWidth", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rearTireAspectRatio' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "rearTireAspectRatio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rearTireDiameter' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "rearTireDiameter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rearTireUnit' }),
    __metadata("design:type", String)
], TireEntity.prototype, "rearTireUnit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'rearTireMultiValues' }),
    __metadata("design:type", String)
], TireEntity.prototype, "rearTireMultiValues", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'trimId' }),
    __metadata("design:type", Number)
], TireEntity.prototype, "trimId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", Date)
], TireEntity.prototype, "createdAt", void 0);
TireEntity = __decorate([
    (0, typeorm_1.Entity)()
], TireEntity);
exports.TireEntity = TireEntity;
//# sourceMappingURL=tires.entity.js.map