import type { ParameterType } from './api-parameter-type';
import 'reflect-metadata';
export declare const Cookie: (key?: string) => ParameterDecorator;
export declare const getCookieParameter: (target: any, propertyKey: string | symbol) => ParameterType;
export declare const CookieParser: (encryptionKey?: string) => ParameterDecorator;
export declare const getCookieParserParameter: (target: any, propertyKey: string | symbol) => {
    encryptionKey?: string;
    parameterIndex: number;
};
