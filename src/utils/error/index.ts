export class HttpError extends Error {
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.name = HttpError.name;
        this.status = status;
    }
}
export * from './await-to-error'