"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = exports.Res = void 0;
const response = Symbol('response');
const Res = () => (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(response, {
        parameterIndex,
    }, target, propertyKey);
};
exports.Res = Res;
const getResponse = (target, propertyKey) => {
    return Reflect.getMetadata(response, target, propertyKey);
};
exports.getResponse = getResponse;
//# sourceMappingURL=api-res-decorator.js.map