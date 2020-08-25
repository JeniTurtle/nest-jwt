import { Module, Global } from '@nestjs/common';
import { JwtOption, JwtAsyncOption } from './jwt.interface';
import { JwtService } from './jwt.service';
import {
  createJwtAsyncOptionsProvider,
  createJwtOptionsProvider,
} from './jwt.provider';

@Global()
@Module({})
export class JwtModule {
  static forRoot(options: JwtOption[]) {
    const optionsProvider = createJwtOptionsProvider(options);
    const providers = [JwtService, optionsProvider];
    return {
      module: JwtModule,
      providers,
      exports: providers,
    };
  }

  static forRootAsync(options: JwtAsyncOption) {
    const optionsProvider = createJwtAsyncOptionsProvider(options);
    const providers = [JwtService, optionsProvider];
    return {
      module: JwtModule,
      providers,
      exports: providers,
    };
  }
}
