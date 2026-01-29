import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInputId {
  @Field()
  id: string;
}
