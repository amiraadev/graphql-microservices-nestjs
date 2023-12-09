/* eslint-disable prettier/prettier */
import { ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';

Resolver(() => User);
export class UsersResolver {
  constructor(private readonly postService: PostsService) {}
  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postService.forAuthor(user.id);
  }
}
