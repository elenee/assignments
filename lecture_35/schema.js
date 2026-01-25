export const typeDefs = `#graphql
    type User{
        id: ID,
        name: String,
        age: Int,
        isSmoker: Boolean,
        posts:[Post]
    }

    type Post{
        id: ID,
        title: String,
        content: String,
        user: User
    }

    type Query{
        users:[User!],
        user(id: ID!): User
        posts: [Post!]
    }

    input createUserDto{
        name: String!,
        age: Int!,
        isSmoker: Boolean!
    }

    input updateUserDto {
        name: String,
        age: Int,
        isSmoker: Boolean
    }

    input createPostDto {
        title: String!,
        content: String!,
        user: ID!
    }

    type Mutation{
        createUser(createUserdto: createUserDto!): String,
        deleteUser(id:ID!): Boolean
        updateUser(id: ID!, updateUserdto: updateUserDto!) : User,
        createPost(createPostdto: createPostDto!): Post,
    }
`;
