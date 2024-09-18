## Method decorators

* `@Status(code: number)` Defines the HTTP response code of the route.

### HTTP method decorators

The following decorators mark your class method as a handler for the corresponding HTTP method.

* `@Get(path?: string)`
* `@Post(path?: string)`
* `@Put(path?: string)`
* `@Delete(path?: string)`
* `@Patch(path?: string)`

## Parameter decorators
|                                      | App Router Type                | API Router Type                |
| ------------------------------------ | ------------------------------ | ------------------------------ |
| `@Req()`                             | NextRequest                    | NextApiRequest                 |
| `@Res()`                             | NextResponse                   | NextApiResponse                |
| `@Query(classTranformer \| string)`  | NextRequest.url.searchParams   | NextApiRequest.query           |
| `@Query(classTranformer \| string)`  | p.params                       | NextApiRequest.params          |
| `@Header(key: string)`               | req.headers[key]               | req.headers.get(key)           |
| `@Body()`                            | req.json()                     | req.body                       |
| `@CookieParser()`                    | next/cookie                    | next/cookie                    |
