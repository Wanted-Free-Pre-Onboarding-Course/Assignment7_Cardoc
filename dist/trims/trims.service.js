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
exports.TrimsService = void 0;
const tires_repository_1 = require("./../tires/tires.repository");
const trims_repository_1 = require("./trims.repository");
const users_repository_1 = require("./../users/users.repository");
const splitTrim_libs_1 = require("./../common/libs/splitTrim.libs");
const mycar_jobs_1 = require("./../common/jobs/mycar.jobs");
const checkArray_libs_1 = require("../common/libs/checkArray.libs");
const createTrim_request_dto_1 = require("./dto/createTrim.request.dto");
const common_1 = require("@nestjs/common");
const trim_constants_1 = require("./constants/trim.constants");
const typeorm_1 = require("@nestjs/typeorm");
let TrimsService = class TrimsService {
    constructor(userRepository, trimRepository, tireRepository) {
        this.userRepository = userRepository;
        this.trimRepository = trimRepository;
        this.tireRepository = tireRepository;
    }
    async createTrim(trimRequestDto) {
        (0, checkArray_libs_1.isInvalidArray)(trimRequestDto);
        for (const trim of trimRequestDto) {
            const userEmail = trim.email;
            const trimId = trim.trimId;
            const requiredValues = await (0, mycar_jobs_1.myCarJobs)(trimId);
            if (!requiredValues.frontTireValue || !requiredValues.rearTireValue)
                throw new common_1.BadRequestException(trim_constants_1.TRIMS_ERROR_MSG.EMPTY_TIRE_VALUE);
            if (!trim_constants_1.regExp.test(requiredValues.frontTireValue) ||
                !trim_constants_1.regExp.test(requiredValues.rearTireValue))
                throw new common_1.BadRequestException(trim_constants_1.TRIMS_ERROR_MSG.INVALID_TIRE_DATA);
            const user = await this.userRepository.findUser(userEmail);
            const { trimInfo, frontTire, rearTire } = new splitTrim_libs_1.splitTrim(requiredValues, user).init();
            const _trim = await this.trimRepository.createTrim(trimInfo, user);
            const findTrim = await this.trimRepository.findTrim(_trim);
            if (!findTrim)
                await this.trimRepository.savedTrim(_trim);
            const _tire = await this.tireRepository.createTire(frontTire, rearTire);
            const findTire = await this.tireRepository.findTire(_tire);
            if (!findTire)
                await this.tireRepository.savedTire(_tire);
        }
        return;
    }
};
TrimsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.userRepository)),
    __metadata("design:paramtypes", [users_repository_1.userRepository,
        trims_repository_1.trimRepository,
        tires_repository_1.tireRepository])
], TrimsService);
exports.TrimsService = TrimsService;
//# sourceMappingURL=trims.service.js.map