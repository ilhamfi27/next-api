import type { ParameterType } from './api-parameter-type';
import 'reflect-metadata';
export declare const Header: (key: string) => ParameterDecorator;
export declare const getHeaderParameter: (target: any, propertyKey: string | symbol) => ParameterType;
