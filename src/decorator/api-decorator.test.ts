import 'reflect-metadata';
import { HandleDecorator, GET, POST, getHandlerMetadata } from './api-decorator';

describe('HandleDecorator', () => {
  it('should store metadata for GET method', () => {
    class TestClass {
      @GET()
      someMethod() {}
    }

    const metadata = getHandlerMetadata(TestClass.prototype, 'GET');
    expect(metadata).toEqual([{"path": undefined, "propertyKey": "someMethod"}]);
  });

  it('should store metadata for POST method', () => {
    class TestClass {
      @POST()
      anotherMethod() {}
    }

    const metadata = getHandlerMetadata(TestClass.prototype, 'POST');
    expect(metadata).toEqual([{"path": undefined, "propertyKey": "anotherMethod"}]);
  });
});