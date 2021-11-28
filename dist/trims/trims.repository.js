"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimRepository = void 0;
const typeorm_1 = require("typeorm");
const trims_entity_1 = require("./trims.entity");
const tires_entity_1 = require("../tires/tires.entity");
const common_1 = require("@nestjs/common");
let trimRepository = class trimRepository extends typeorm_1.Repository {
    async createTrim(trims, user) {
        return this.create({
            trimId: trims['trimId'],
            trimName: trims['trimName'],
            user,
        });
    }
    async savedTrim(trim) {
        try {
            return await this.save(trim);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('같은 trim 정보가 저장되어 있습니다.');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async findTrim(trim) {
        try {
            return await this.findOne(trim);
        }
        catch (err) {
            throw err;
        }
    }
    async findTrimById(getTireDto) {
        try {
            return await this.createQueryBuilder('trim')
                .where('trim.userId=:userId', getTireDto)
                .getMany();
        }
        catch (err) {
            throw err;
        }
    }
};
trimRepository = __decorate([
    (0, typeorm_1.EntityRepository)(trims_entity_1.TrimEntity)
], trimRepository);
exports.trimRepository = trimRepository;
//# sourceMappingURL=trims.repository.js.map