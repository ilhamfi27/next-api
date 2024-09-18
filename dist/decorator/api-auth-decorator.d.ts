import type { NextApiRequest } from 'next';
import 'reflect-metadata';
export interface AuthFunction {
    (req: NextApiRequest): Promise<void>;
}
export declare const AuthMetadataKey: unique symbol;
export interface AuthMetadataValue {
    auth: AuthFunction;
    propertyKey: string;
}
export declare const getAuthMetadata: (target: any, propertyKey: string | symbol) => AuthMetadataValue;
export declare const Auth: (fn: AuthFunction) => MethodDecorator;
