"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiresModule = void 0;
const trims_repository_1 = require("./../trims/trims.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const tires_controller_1 = require("./tires.controller");
const tires_repository_1 = require("./tires.repository");
const tires_service_1 = require("./tires.service");
let TiresModule = class TiresModule {
};
TiresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tires_repository_1.tireRepository, trims_repository_1.trimRepository]),
            users_module_1.UsersModule,
        ],
        controllers: [tires_controller_1.TiresController],
        providers: [tires_service_1.TiresService],
    })
], TiresModule);
exports.TiresModule = TiresModule;
//# sourceMappingURL=tires.module.js.map