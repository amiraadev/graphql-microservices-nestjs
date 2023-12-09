import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Directive('@key(fields:"id")')
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
