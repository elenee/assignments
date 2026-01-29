import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostPayload {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field()
  content: string;
}
