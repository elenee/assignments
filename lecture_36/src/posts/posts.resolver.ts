import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { PostPayload } from './dto/posts-payload';
import {
  CreatePostInput,
  PostInputId,
  updatePostInput,
} from './dto/createPost.input';

@Resolver()
export class PostResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [PostPayload], { nullable: true })
  getPosts() {
    return this.postsService.findAll();
  }

  @Query(() => PostPayload, { nullable: true })
  getPostById(@Args('id') { id }: PostInputId) {
    console.log(id);
    return this.postsService.findOne(id);
  }

  @Mutation(() => PostPayload)
  createPost(@Args('createPost') createPost: CreatePostInput) {
    return this.postsService.create(createPost);
  }

  @Mutation(() => PostPayload)
  updatePost(
    @Args('id') { id }: PostInputId,
    @Args('updatePost') updatePost: updatePostInput,
  ) {
    return this.postsService.update(id, updatePost);
  }

  @Mutation(() => PostPayload)
  deletePost(@Args('id') { id }: PostInputId) {
    return this.postsService.remove(id);
  }
}
