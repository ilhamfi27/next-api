import 'reflect-metadata';
import { Res, getResponse } from './api-res-decorator';

describe('api-res-decorator', () => {
    it('should define metadata for response parameter', () => {
        class TestClass {
            testMethod(@Res() res: any) {}
        }

        const metadata = Reflect.getMetadata('design:paramtypes', TestClass.prototype, 'testMethod');
        expect(metadata).toBeDefined();
    });

    it('should retrieve the correct metadata for response parameter', () => {
        class TestClass {
            testMethod(@Res() res: any) {}
        }

        const responseMetadata = getResponse(TestClass.prototype, 'testMethod');
        expect(responseMetadata).toEqual({ parameterIndex: 0 });
    });
});