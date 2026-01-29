import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersPayload } from './dto/user.payload';
import { CreateUserInput, UpdateUserInput } from './dto/user.input';
import { UserInputId } from './dto/user-id.input';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [UsersPayload], { nullable: true })
  getUsers() {
    return this.usersService.findAll();
  }

  @Query(() => UsersPayload, { nullable: true })
  getUserById(@Args('id') { id }: UserInputId) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => UsersPayload)
  createUser(@Args('createUser') createUser: CreateUserInput) {
    return this.usersService.create(createUser);
  }

  @Mutation(() => UsersPayload)
  updateUserById(
    @Args('id') { id }: UserInputId,
    @Args('updateUser') updateUser: UpdateUserInput,
  ) {
    return this.usersService.update(id, updateUser);
  }

  @Mutation(() => UsersPayload)
  deleteUser(@Args('id') { id }: UserInputId) {
    return this.usersService.remove(id);
  }
}
