import 'reflect-metadata'; // Required for Reflect API
import { Header, getHeaderParameter } from './api-header-decorator'; // Update the path accordingly

describe('Header Decorator', () => {
  it('should store metadata for the header parameter', () => {
    class TestClass {
      someMethod(@Header('Authorization') authHeader: string) {}
    }

    const metadata = getHeaderParameter(TestClass.prototype, 'someMethod');
    
    expect(metadata).toEqual({
      parameterIndex: 0, // First parameter
      key: 'Authorization', // Key specified in the Header decorator
    });
  });
});