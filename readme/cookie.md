# Cookie
## Importing the Decorators
To use the Cookie and CookieParser decorators, import them from your library like so:
```ts
import { CookieParser } from 'next-app-router-decorators';
```
## Usage
`@CookieParser()`
The `@CookieParser()` decorator injects a Cookies instance into the method, allowing you to access or manipulate cookies programmatically.

```ts
import { CookieParser, Cookies } from 'next-app-router-decorators';

class UserHandler {
  @POST()
  someMethod(@CookieParser() cookieParser: Cookies) {
    // Use cookieParser to interact with cookies
    const cookie = cookieParser.get();
    console.log(cookie);
  }
  @GET()
  otherMethod(@CookieParser() cookieParser: Cookies) {
    // Use cookieParser to interact with cookies
    const cookie = cookieParser.set('some-key', 'some-value');
    console.log(cookie);
  }
}
```
## encryption
you can enable cookie encryption by passing encryption key parameter in first argument of @CookieParser decorators
```ts
  @GET()
  someMethod(@CookieParser('this-is-encryption-key') cookieParser: Cookies) {
    // Use cookieParser to interact with cookies
    const cookie = cookieParser.set('some-key', 'some-value');
    console.log(cookie);
  }
```
