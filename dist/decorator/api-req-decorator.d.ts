import type { ParameterType } from './api-parameter-type';
export declare const Req: () => ParameterDecorator;
export declare const getRequest: (target: any, propertyKey: string | symbol) => ParameterType;
