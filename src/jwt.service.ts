import * as jwtTool from 'jsonwebtoken';
import { Inject, Injectable } from '@nestjs/common';
import { JWT_OPTION } from './jwt.constants';
import { JwtOption } from './jwt.interface';

@Injectable()
export class JwtService {
  constructor(@Inject(JWT_OPTION) private jwtOption: JwtOption) {}

  sign(payload: object, options: object = {}) {
    const { secret, sign } = this.jwtOption;
    return jwtTool.sign(payload, secret, {
      ...sign,
      ...options,
    });
  }

  verify(token: string, options: object = {}) {
    const { secret, verify } = this.jwtOption;
    return jwtTool.verify(token, secret, {
      ...verify,
      ...options,
    });
  }

  decode(token: string, options: object = {}) {
    const { decode } = this.jwtOption;
    return jwtTool.decode(token, {
      ...decode,
      ...options,
    });
  }
}
