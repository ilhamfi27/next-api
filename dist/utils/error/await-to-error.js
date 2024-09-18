"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awaitToError = void 0;
const awaitToError = async (p) => {
    try {
        const r = await Promise.resolve(p);
        return [null, r];
    }
    catch (e) {
        return [e, null];
    }
};
exports.awaitToError = awaitToError;
//# sourceMappingURL=await-to-error.js.map