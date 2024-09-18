"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaderParameter = exports.Header = void 0;
require("reflect-metadata");
const headerMetadataKey = Symbol('header');
const Header = (key) => (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(headerMetadataKey, {
        parameterIndex,
        key,
    }, target, propertyKey);
};
exports.Header = Header;
const getHeaderParameter = (target, propertyKey) => {
    return Reflect.getMetadata(headerMetadataKey, target, propertyKey);
};
exports.getHeaderParameter = getHeaderParameter;
//# sourceMappingURL=api-header-decorator.js.map