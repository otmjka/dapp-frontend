import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const setupApollo = (): { client: ApolloClient<NormalizedCacheObject> } => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });

  return {
    client,
  };
};

export default setupApollo;
