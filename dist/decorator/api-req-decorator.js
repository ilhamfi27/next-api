"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequest = exports.Req = void 0;
const request = Symbol('request');
const Req = () => (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(request, {
        parameterIndex,
    }, target, propertyKey);
};
exports.Req = Req;
const getRequest = (target, propertyKey) => {
    return Reflect.getMetadata(request, target, propertyKey);
};
exports.getRequest = getRequest;
//# sourceMappingURL=api-req-decorator.js.map