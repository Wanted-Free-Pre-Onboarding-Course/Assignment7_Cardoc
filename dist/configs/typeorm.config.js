"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmModuleOptions = void 0;
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.typeOrmModuleOptions = {
    useFactory: async (configService) => ({
        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: configService.get('NODE_ENV') === 'development' ? true : false,
        autoLoadEntities: true,
        logging: configService.get('NODE_ENV') === 'development' ? true : false,
        keepConnectionAlive: true,
    }),
    inject: [config_1.ConfigService],
};
//# sourceMappingURL=typeorm.config.js.map