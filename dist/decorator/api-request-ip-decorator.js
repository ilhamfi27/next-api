"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIpAddressParameter = exports.IpAddress = void 0;
const ipMetadataKey = Symbol('ipAddress');
const IpAddress = () => (target, propertyKey, parameterIndex) => {
    Reflect.defineMetadata(ipMetadataKey, parameterIndex, target, propertyKey);
};
exports.IpAddress = IpAddress;
const getIpAddressParameter = (target, propertyKey) => {
    return Reflect.getMetadata(ipMetadataKey, target, propertyKey);
};
exports.getIpAddressParameter = getIpAddressParameter;
//# sourceMappingURL=api-request-ip-decorator.js.map