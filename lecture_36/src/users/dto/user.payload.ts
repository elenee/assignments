import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UsersPayload{
    @Field()
    _id: string

    @Field()
    fullName: string

    @Field()
    email: string

    @Field()
    age: number
}