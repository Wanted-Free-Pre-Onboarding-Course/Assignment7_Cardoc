import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-jwt';
import { userRepository } from '../users.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(userRepository)
    private userRepository: userRepository,
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY,
      jwtFromRequest: fromAuthCookie(),
    });
  }

  async validate(payload) {
    const { email } = payload;
    const user = await this.userRepository.findUser(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

const fromAuthCookie = function () {
  return function (request) {
    let token = null;
    if (request && request.cookies) {
      token = request.cookies['accessToken'];
    }
    return token;
  };
};
