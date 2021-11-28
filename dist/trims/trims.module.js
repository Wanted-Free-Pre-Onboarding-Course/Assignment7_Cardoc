"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrimsModule = void 0;
const tires_repository_1 = require("./../tires/tires.repository");
const trims_repository_1 = require("./trims.repository");
const users_repository_1 = require("./../users/users.repository");
const common_1 = require("@nestjs/common");
const trims_controller_1 = require("./trims.controller");
const trims_service_1 = require("./trims.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
let TrimsModule = class TrimsModule {
};
TrimsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_repository_1.userRepository, trims_repository_1.trimRepository, tires_repository_1.tireRepository]),
            users_module_1.UsersModule,
        ],
        controllers: [trims_controller_1.TrimsController],
        providers: [trims_service_1.TrimsService],
    })
], TrimsModule);
exports.TrimsModule = TrimsModule;
//# sourceMappingURL=trims.module.js.map