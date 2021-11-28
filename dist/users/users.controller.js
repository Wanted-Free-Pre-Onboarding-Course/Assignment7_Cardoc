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
exports.UsersController = void 0;
const signin_fail_dto_1 = require("./dto/swagger/fail/signin.fail.dto");
const signup_success_dto_1 = require("./dto/swagger/success/signup.success.dto");
const signin_request_dto_1 = require("./dto/signin.request.dto");
const signup_request_dto_1 = require("./dto/signup.request.dto");
const success_interceptor_1 = require("./../common/interceptors/success.interceptor");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const signup_fail_dto_1 = require("./dto/swagger/fail/signup.fail.dto");
const signin_success_dto_1 = require("./dto/swagger/success/signin.success.dto");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async signup(signupRequestDto) {
        return await this.userService.signup(signupRequestDto);
    }
    async signin(signinRequestDto, response) {
        const { accessToken } = await this.userService.signin(signinRequestDto);
        response.cookie('accessToken', accessToken, { httpOnly: true });
        return await this.userService.signin(signinRequestDto);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '회원가입 성공',
        type: signup_success_dto_1.UserSignupDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '모든 입력값을 입력해주세요.',
        type: signup_fail_dto_1.UserSignupBadRequestDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: '같은 이메일로 가입되어 있습니다.',
        type: signup_fail_dto_1.UserSignupConflictDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '회원가입' }),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_request_dto_1.SignupRequestDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signup", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '로그인 성공',
        type: signin_success_dto_1.UserSigninDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: '모든 입력값을 입력해주세요.',
        type: signin_fail_dto_1.UserSigninBadRequestDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: '비밀번호가 맞지 않습니다.',
        type: signin_fail_dto_1.UserSigninUnauthorizedDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: '로그인' }),
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_request_dto_1.SigninRequestDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signin", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map