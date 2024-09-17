import type { ParameterType } from './api-parameter-type';
import 'reflect-metadata';
const cookieMetadataKey = Symbol('cookie');
/**
 * Cookie decorator, injects the cookie value with the given key
 * to the function as an argument.
 *
 * @param key The key of the cookie.
 * @returns A parameter decorator.
 *
 * @example
 * class MyClass {
 *   someMethod(@Cookie('myCookie') myCookie: string) {
 *     // do something with myCookie
 *   }
 * }
 */
export const Cookie =
    (key?: string): ParameterDecorator =>
    (target, propertyKey, parameterIndex) => {
        Reflect.defineMetadata(
            cookieMetadataKey,
            {
                parameterIndex,
                key,
            } as ParameterType,
            target,
            propertyKey as symbol,
        );
    };

export const getCookieParameter = (target: any, propertyKey: string | symbol): ParameterType => {
    return Reflect.getMetadata(cookieMetadataKey, target, propertyKey);
};

const cookieParserMetadataKey = Symbol('cookie-parser');


/**
 * CookieParser decorator, injects a cookie parser function as an argument of the controller method.
 * The cookie parser function takes a key and a value of type T.
 * The value is encrypted using the ENCRYPTION_SECRET environment variable before being set.
 * The cookie parser function returns a function that can be used to get the parsed cookie value.
 * @param encryptionKey The secret used to encrypt the cookie value.
 * @returns A parameter decorator.
 *
 * @example
 * class MyClass {
 *   someMethod(@CookieParser() cookie: Cookie) {
 *     const value = cookie.get('myCookie');
 *     cookie.set('myCookie', 'some-value');
 *   }
 * }
 */
export const CookieParser = (encryptionKey?: string): ParameterDecorator => (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(cookieParserMetadataKey, { encryptionKey, parameterIndex }, target, propertyKey as symbol);
};

export const getCookieParserParameter = (target: any, propertyKey: string | symbol): {
    encryptionKey?: string;
    parameterIndex: number;
} => {
    return Reflect.getMetadata(cookieParserMetadataKey, target, propertyKey);
};
