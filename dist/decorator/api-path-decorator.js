"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathParametersMeta = exports.Path = void 0;
const path = Symbol('path');
const Path = (pathParameterName) => (target, propertyKey, parameterIndex) => {
    const pathMeta = (0, exports.getPathParametersMeta)(target, propertyKey);
    pathMeta.push({
        parameterIndex,
        pathParameter: pathParameterName,
    });
    Reflect.defineMetadata(path, pathMeta, target, propertyKey);
};
exports.Path = Path;
const getPathParametersMeta = (target, propertyKey) => {
    return Reflect.getMetadata(path, target, propertyKey) || [];
};
exports.getPathParametersMeta = getPathParametersMeta;
//# sourceMappingURL=api-path-decorator.js.map