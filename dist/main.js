"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const expressBasicAuth = require("express-basic-auth");
class Application {
    constructor(server) {
        this.server = server;
        this.logger = new common_1.Logger(Application.name);
        this.server = server;
        this.PORT = process.env.PORT;
        this.DEV_MODE = process.env.NODE_ENV === 'production' ? false : true;
        this.ADMIN_USER = process.env.ADMIN_USER;
        this.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    }
    async setUpGlobalMiddleware() {
        this.server.use(cookieParser());
        this.setUpBasicAuth();
        this.setUpOpenAPIMiddleware();
        this.server.useGlobalPipes(new common_1.ValidationPipe());
        this.server.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    }
    setUpBasicAuth() {
        this.server.use(['/docs', '/docs-json'], expressBasicAuth({
            challenge: true,
            users: {
                [this.ADMIN_USER]: this.ADMIN_PASSWORD,
            },
        }));
    }
    setUpOpenAPIMiddleware() {
        this.server.enableCors();
        swagger_1.SwaggerModule.setup('docs', this.server, swagger_1.SwaggerModule.createDocument(this.server, new swagger_1.DocumentBuilder()
            .setTitle('카닥 - API')
            .setDescription('원티드 프리 온보딩 7차 과제')
            .setVersion('0.0.1')
            .build()));
    }
    async bootstrap() {
        await this.setUpGlobalMiddleware();
        await this.server.listen(this.PORT);
    }
    startLog() {
        if (this.DEV_MODE) {
            this.logger.log(`✅ Server on http://localhost:${this.PORT}`);
        }
        else {
            this.logger.log(`✅ Server on port ${this.PORT}...`);
        }
    }
    errorLog(error) {
        this.logger.error(`🆘 Server error ${error}`);
    }
}
async function bootstrap() {
    const server = await core_1.NestFactory.create(app_module_1.AppModule);
    const app = new Application(server);
    await app.bootstrap();
    app.startLog();
}
bootstrap().catch((error) => {
    new common_1.Logger('init').error(error);
});
//# sourceMappingURL=main.js.map