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
exports.TiresService = void 0;
const trims_repository_1 = require("./../trims/trims.repository");
const tires_repository_1 = require("./tires.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let TiresService = class TiresService {
    constructor(tireRepository, trimRepository) {
        this.tireRepository = tireRepository;
        this.trimRepository = trimRepository;
    }
    async getTire(getTireDto) {
        const usersTrim = await this.trimRepository.findTrimById(getTireDto);
        const userTrimArray = Object.values(usersTrim);
        const tires = [];
        for (const trim of userTrimArray) {
            tires.push(await this.tireRepository.getTire(trim));
        }
        return tires;
    }
};
TiresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tires_repository_1.tireRepository)),
    __metadata("design:paramtypes", [tires_repository_1.tireRepository,
        trims_repository_1.trimRepository])
], TiresService);
exports.TiresService = TiresService;
//# sourceMappingURL=tires.service.js.map