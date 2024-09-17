import { awaitToError } from './await-to-error';

describe('awaitToError', () => {
    it('should return result and null error when promise resolves', async () => {
        const promise = Promise.resolve('success');
        const [error, result] = await awaitToError(promise);
        
        expect(error).toBeNull();
        expect(result).toBe('success');
    });

    it('should return error and null result when promise rejects', async () => {
        const promise = Promise.reject(new Error('failure'));
        const [error, result] = await awaitToError(promise);
        
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'failure');
        expect(result).toBeNull();
    });

    it('should handle non-error rejections', async () => {
        const promise = Promise.reject('failure');
        const [error, result] = await awaitToError(promise);
        
        expect(error).toBe('failure');
        expect(result).toBeNull();
    });

    it('should handle null results', async () => {
        const promise = Promise.resolve(null);
        const [error, result] = await awaitToError(promise);
        
        expect(error).toBeNull();
        expect(result).toBeNull();
    });
});