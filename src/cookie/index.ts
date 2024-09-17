import { getCookie, setCookie } from 'cookies-next';
import Cryptr from 'cryptr';
import { Nullable } from '../utils';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
export interface Cookies {
    set: <T>(key: string, value: T) => void;
    get: <T = string>(key: string) => Nullable<T>;
}

    /**
     * Returns a function that can be used to set a cookie value.
     * The returned function takes a string key and a value of type T.
     * The value is encrypted using the ENCRYPTION_SECRET environment variable before being set.
     * @param req The NextApiRequest object.
     * @returns A function that can be used to set a cookie value.
     */
export const setCookieFunction = (req: NextRequest | NextApiRequest, encryptionKey?: string, res?: NextApiResponse) => {
    return <T>(key: string, value: T) => {
        let v = JSON.stringify(value);
        if(encryptionKey) {
            const cryptr = new Cryptr(encryptionKey);
            v = cryptr.encrypt(JSON.stringify(value));
        }
        if(res) {
            setCookie(key, v, {
                req: req as NextApiRequest, res,
                maxAge: 24 * 60 * 60,
            });
            return
        }
        setCookie(key, v, {
            cookies,
            maxAge: 24 * 60 * 60,
        });
        return
    };
};

    /**
     * Returns a function that can be used to get a cookie value.
     * The returned function takes a string key and returns a value of type T or undefined.
     * The value is decrypted using the ENCRYPTION_SECRET environment variable.
     * @param req The NextApiRequest object.
     * @returns A function that can be used to get a cookie value.
     */
export const getCookieFunction = (req: NextRequest | NextApiRequest, encryptionKey?: string) => {
    return <T = string>(key: string): Nullable<T> => {
        const result = getCookie(key, {
            req: req as NextApiRequest,
        });
        if (!result) return undefined;

        try {
            if(encryptionKey) {
                const cryptr = new Cryptr(encryptionKey);
                const decrypted = cryptr.decrypt(result.toString());
                return JSON.parse(decrypted);
            }
            return JSON.parse(result.toString());
        } catch(e) {
            throw new Error('Cookie value is not a valid JSON, please check the encryption key');
        }
    };
};
