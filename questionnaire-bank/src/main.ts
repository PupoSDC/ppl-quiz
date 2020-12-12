import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from 'apollo-server';
import resolvers from "./resolvers";

const PORT = 8080;

const startServer = async () => {
  const schema = await buildSchema({ resolvers });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
};

startServer();
