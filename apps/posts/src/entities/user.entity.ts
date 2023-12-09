/* eslint-disable prettier/prettier */
import { ID, ObjectType, Field, Directive } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields:"id")')
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => [Post])
  posts?: Post[];
}
