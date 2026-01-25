import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { posts, users } from "./data.js";

const resolvers = {
  Query: {
    users() {
      return users;
    },
    user(_, { id }) {
      return users.find((user) => user.id === Number(id));
    },
    posts() {
      return posts;
    },
  },
  Post: {
    user(parent) {
      const user = users.find((user) => user.id === parent.userId);
      return user;
    },
  },
  User: {
    posts(parent) {
      const post = posts.filter((el) => el.userId === parent.id);
      return post;
    },
  },

  Mutation: {
    deleteUser(_, { id }) {
      const index = users.findIndex((el) => el.id === Number(id));
      if (index == -1) return false;
      users.splice(index, 1);
      return true;
    },

    createUser(_, { createUserdto: { name, age, isSmoker } }) {
      const lastIndex = users[users.length - 1]?.id || 0;
      const newObj = {
        id: lastIndex + 1,
        name,
        age,
        isSmoker,
      };
      users.push(newObj);
      return "user created";
    },

    updateUser(_, { id, updateUserdto }) {
      const { name, age, isSmoker } = updateUserdto;
      const user = users.find((user) => user.id === Number(id));
      if (!user) return false;
      const updatedUser = {
        ...user,
        name: name ?? user.name,
        age: age ?? user.age,
        isSmoker: isSmoker ?? user.isSmoker,
      };
      return updatedUser;
    },

    createPost(_, { createPostdto }) {
      const { title, content, user: userId } = createPostdto;
      const user = users.find((user) => user.id === Number(userId));
      if (!user) return false;

      const lastindex = posts[posts.length - 1]?.id || 0;
      const newObj = {
        id: lastindex + 1,
        title,
        content,
        userId: user.id,
      };
      posts.push(newObj);
      return newObj;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`Server running on ${url}`);
