import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphql = new ApolloClient({
  uri: "http://192.168.1.227:8080",
  cache: new InMemoryCache(),
});

export default graphql;
