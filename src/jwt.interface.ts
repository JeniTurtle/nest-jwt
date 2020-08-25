import {
  SignOptions,
  Secret,
  VerifyOptions,
  DecodeOptions,
} from 'jsonwebtoken';
import { FactoryProvider, Logger, LoggerService } from '@nestjs/common';

export interface JwtOption {
  secret: Secret;
  sign?: SignOptions;
  verify?: VerifyOptions;
  decode?: DecodeOptions;
  logger?: Logger | LoggerService;
}

export interface JwtAsyncOption {
  name?: string;
  useFactory: (...args: any[]) => Promise<JwtOption> | JwtOption;
  inject?: FactoryProvider['inject'];
}
