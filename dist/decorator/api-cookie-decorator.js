"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieParserParameter = exports.CookieParser = exports.getCookieParameter = exports.Cookie = void 0;
require("reflect-metadata");
const cookieMetadataKey = Symbol('cookie');
const Cookie = (key) => (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(cookieMetadataKey, {
        parameterIndex,
        key,
    }, target, propertyKey);
};
exports.Cookie = Cookie;
const getCookieParameter = (target, propertyKey) => {
    return Reflect.getMetadata(cookieMetadataKey, target, propertyKey);
};
exports.getCookieParameter = getCookieParameter;
const cookieParserMetadataKey = Symbol('cookie-parser');
const CookieParser = (encryptionKey) => (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(cookieParserMetadataKey, { encryptionKey, parameterIndex }, target, propertyKey);
};
exports.CookieParser = CookieParser;
const getCookieParserParameter = (target, propertyKey) => {
    return Reflect.getMetadata(cookieParserMetadataKey, target, propertyKey);
};
exports.getCookieParserParameter = getCookieParserParameter;
//# sourceMappingURL=api-cookie-decorator.js.map