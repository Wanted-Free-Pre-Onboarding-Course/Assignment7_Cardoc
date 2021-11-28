import { userRepository } from '../users.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: userRepository);
    validate(payload: any): Promise<object>;
}
export {};
