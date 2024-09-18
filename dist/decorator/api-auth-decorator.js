"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.getAuthMetadata = exports.AuthMetadataKey = void 0;
require("reflect-metadata");
exports.AuthMetadataKey = Symbol('auth');
const getAuthMetadata = (target, propertyKey) => {
    return Reflect.getMetadata(exports.AuthMetadataKey, target, propertyKey);
};
exports.getAuthMetadata = getAuthMetadata;
const Auth = (fn) => (target, propertyKey) => {
    Reflect.defineMetadata(exports.AuthMetadataKey, {
        auth: fn,
        propertyKey,
    }, target, propertyKey);
};
exports.Auth = Auth;
//# sourceMappingURL=api-auth-decorator.js.map