import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Book {
    title:String
    author:String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "K.Chopin",
  },
  {
    title: "The Awakening",
    author: "K.Chopin",
  },
];

const resolvers = {
  Query: {
    books: () => {
      return books;
    },
    // books: () => books
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  // typeDefs
  resolvers: resolvers,
  // resolvers
});

const startApollo = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
};
startApollo();
