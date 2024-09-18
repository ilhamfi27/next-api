"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.ValidationError = void 0;
const class_validator_1 = require("class-validator");
const utils_1 = require("./utils");
const buildKey = (root, key) => {
    if (isNaN(parseInt(key))) {
        key = `${root || ''}.${key}`;
    }
    else {
        key = `${root || ''}[${key}]`;
    }
    return key;
};
const buildErrorMessage = (errors, key) => {
    return errors
        .map((error) => {
        let errs = [];
        if (error.constraints) {
            errs = Object.values(error.constraints).map((message) => `${key ?? ''}.${message}`);
        }
        if (error.children) {
            errs = [...errs, ...buildErrorMessage(error.children, buildKey(key, error.property)).flat()];
        }
        return errs;
    })
        .flat();
};
class ValidationError extends utils_1.HttpError {
    constructor(messages) {
        super('Validation failed!', 400);
        this.name = ValidationError.name;
        this.messages = messages;
    }
}
exports.ValidationError = ValidationError;
const validateRequest = async (request) => {
    const errors = await (0, class_validator_1.validate)(request);
    if (errors.length > 0) {
        throw new ValidationError(buildErrorMessage(errors));
    }
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validator.js.map