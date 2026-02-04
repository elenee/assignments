# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type UsersPayload {
  _id: String!
  fullName: String!
  email: String!
  age: Float!
}

type PostPayload {
  _id: String!
  title: String!
  content: String!
}

type Query {
  getUsers: [UsersPayload!]
  getUserById(id: UserInputId!): UsersPayload
  getPosts: [PostPayload!]
  getPostById(id: PostInputId!): PostPayload
}

input UserInputId {
  id: String!
}

input PostInputId {
  id: String!
}

type Mutation {
  createUser(createUser: CreateUserInput!): UsersPayload!
  updateUserById(id: UserInputId!, updateUser: UpdateUserInput!): UsersPayload!
  deleteUser(id: UserInputId!): UsersPayload!
  createPost(createPost: CreatePostInput!): PostPayload!
  updatePost(id: PostInputId!, updatePost: updatePostInput!): PostPayload!
  deletePost(id: PostInputId!): PostPayload!
}

input CreateUserInput {
  fullName: String!
  email: String!
  age: Float!
}

input UpdateUserInput {
  fullName: String
  email: String
  age: Float
}

input CreatePostInput {
  title: String!
  content: String!
}

input updatePostInput {
  title: String
  content: String
}