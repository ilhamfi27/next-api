import 'reflect-metadata';
import { Cookie, getCookieParameter, CookieParser, getCookieParserParameter } from './api-cookie-decorator';
import { Cookies } from '../cookie';

describe('Cookie Decorator', () => {
  it('should store metadata for the cookie parameter', () => {
    class TestClass {
      someMethod(@Cookie('myCookie') cookie: string) {}
    }

    const metadata = getCookieParameter(TestClass.prototype, 'someMethod');
    expect(metadata).toEqual({
      parameterIndex: 0,
      key: 'myCookie',
    });
  });

  it('should store metadata for the cookie parser', () => {
    class TestClass {
      someMethod(@CookieParser() cookieParser: Cookies) {}
    }

    const metadata = getCookieParserParameter(TestClass.prototype, 'someMethod');
    expect(metadata).toEqual({"encryptionKey": undefined, "parameterIndex": 0});
  });
});