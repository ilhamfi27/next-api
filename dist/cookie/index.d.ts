import { Nullable } from '../utils';
import { NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
export interface Cookies {
    set: <T>(key: string, value: T) => void;
    get: <T = string>(key: string) => Nullable<T>;
}
export declare const setCookieFunction: (req: NextRequest | NextApiRequest, encryptionKey?: string, res?: NextApiResponse) => <T>(key: string, value: T) => void;
export declare const getCookieFunction: (req: NextRequest | NextApiRequest, encryptionKey?: string) => <T = string>(key: string) => Nullable<T>;
