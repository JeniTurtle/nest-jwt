import { Provider } from '@nestjs/common';
import { JwtAsyncOption, JwtOption } from './jwt.interface';
import { JWT_OPTION } from './jwt.constants';

export function createJwtOptionsProvider(
  options: JwtOption[],
): Provider<JwtOption[]> {
  return {
    provide: JWT_OPTION,
    useValue: options,
  };
}

export function createJwtAsyncOptionsProvider(
  options: JwtAsyncOption,
): Provider {
  return {
    provide: JWT_OPTION,
    useFactory: options.useFactory,
    inject: options.inject || [],
  };
}
