import 'reflect-metadata'; // Required for Reflect API
import { Req, getRequest } from './api-req-decorator'; // Update the path as needed

describe('Req Decorator', () => {
  it('should store metadata for the request parameter', () => {
    class TestClass {
      someMethod(@Req() req: any) {}
    }

    const metadata = getRequest(TestClass.prototype, 'someMethod');
    
    expect(metadata).toEqual({
      parameterIndex: 0, // First parameter (index 0)
    });
  });
});