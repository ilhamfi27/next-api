import { validateRequest, ValidationError } from './validator';
import { IsString, IsInt, MinLength } from 'class-validator';

class TestRequest {
    @IsString()
    @MinLength(5)
    name: string;

    @IsInt()
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

describe('validateRequest', () => {
    it('should pass validation for a valid request', async () => {
        const request = new TestRequest('ValidName', 25);
        await expect(validateRequest(request)).resolves.toBeUndefined();
    });

    it('should throw ValidationError for an invalid request', async () => {
        const request = new TestRequest('abc', 25); // name is too short
        await expect(validateRequest(request)).rejects.toThrow(ValidationError);
    });

    it('should include error messages in ValidationError', async () => {
        const request = new TestRequest('abc', 'notAnInt' as any); // multiple validation errors
        try {
            await validateRequest(request);
        } catch (error) {
            if (error instanceof ValidationError) {
                expect(error.messages).toContain('.name must be longer than or equal to 5 characters');
                expect(error.messages).toContain('.age must be an integer number');
            } else {
                throw error;
            }
        }
    });
});