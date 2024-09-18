# Route Matching
You can use Express.js-style route matching with parameters inside your handlers.
```ts
// app/api/users/[[...params]]/route.ts
import { createHandler, Get, Param } from 'next-app-router-decorator';

class UserHandler {
  @Get()
  public list() {
    return DB.findAllUsers();
  }

  @Get('/api/users/:id') // this pattern should include the origin path ex: `/api/users`
  public details(@Param('id') id: string) {
    return DB.findUserById(id);
  }

  @Get('/api/users/:userId/comments')
  public comments(@Param('userId') userId: string) {
    return DB.findUserComments(userId);
  }

  @Get('/api/users/:userId/comments/:commentId')
  public commentDetails(@Param('userId') userId: string, @Param('commentId') commentId: string) {
    return DB.findUserCommentById(userId, commentId);
  }
}

module.exports = createHandler(UserHandler);
```