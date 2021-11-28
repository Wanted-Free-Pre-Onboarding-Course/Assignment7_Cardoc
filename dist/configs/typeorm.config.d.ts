import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const typeOrmModuleOptions: {
    useFactory: (configService: ConfigService) => Promise<TypeOrmModuleOptions>;
    inject: (typeof ConfigService)[];
};
