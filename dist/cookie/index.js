"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieFunction = exports.setCookieFunction = void 0;
const cookies_next_1 = require("cookies-next");
const cryptr_1 = __importDefault(require("cryptr"));
const headers_1 = require("next/headers");
const setCookieFunction = (req, encryptionKey, res) => {
    return (key, value) => {
        let v = JSON.stringify(value);
        if (encryptionKey) {
            const cryptr = new cryptr_1.default(encryptionKey);
            v = cryptr.encrypt(JSON.stringify(value));
        }
        if (res) {
            (0, cookies_next_1.setCookie)(key, v, {
                req: req, res,
                maxAge: 24 * 60 * 60,
            });
            return;
        }
        (0, cookies_next_1.setCookie)(key, v, {
            cookies: headers_1.cookies,
            maxAge: 24 * 60 * 60,
        });
        return;
    };
};
exports.setCookieFunction = setCookieFunction;
const getCookieFunction = (req, encryptionKey) => {
    return (key) => {
        const result = (0, cookies_next_1.getCookie)(key, {
            req: req,
        });
        if (!result)
            return undefined;
        try {
            if (encryptionKey) {
                const cryptr = new cryptr_1.default(encryptionKey);
                const decrypted = cryptr.decrypt(result.toString());
                return JSON.parse(decrypted);
            }
            return JSON.parse(result.toString());
        }
        catch (e) {
            throw new Error('Cookie value is not a valid JSON, please check the encryption key');
        }
    };
};
exports.getCookieFunction = getCookieFunction;
//# sourceMappingURL=index.js.map