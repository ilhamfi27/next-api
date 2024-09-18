import { HttpError } from './utils';
export declare class ValidationError extends HttpError {
    messages: string[];
    constructor(messages: string[]);
}
export declare const validateRequest: <T>(request: T) => Promise<void>;
