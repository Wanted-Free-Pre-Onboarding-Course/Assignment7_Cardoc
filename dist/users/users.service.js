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
exports.UsersService = void 0;
const users_entity_1 = require("./users.entity");
const users_repository_1 = require("./users.repository");
const signup_request_dto_1 = require("./dto/signup.request.dto");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async signup(signupRequestDto) {
        const { email, password, name } = signupRequestDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const hashedSignupRequestDto = new signup_request_dto_1.SignupRequestDto(email, hashedPassword, name);
        const user = await this.userRepository.createUser(hashedSignupRequestDto);
        const savedUser = await this.userRepository.savedUser(user);
        return { userId: savedUser['id'] };
    }
    async signin(signinRequestDto) {
        const { email, password } = signinRequestDto;
        const user = await this.userRepository.findUser(email);
        if (user && (await bcrypt.compare(password, user['password']))) {
            const payload = { email };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            throw new common_1.UnauthorizedException('login failed');
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.userRepository)),
    __metadata("design:paramtypes", [users_repository_1.userRepository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map