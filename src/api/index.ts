import {
  ApolloClient,
  InMemoryCache,
  InMemoryCacheConfig,
  NormalizedCacheObject,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';


export function makeApiClient(): ApolloClient<NormalizedCacheObject> {
  const host = process.env.REACT_APP_BACKEND_URL;

  const inMemoryCacheConfig: InMemoryCacheConfig = {
    typePolicies: {
      Query: {
        fields: {},
      },
    },
  };

  const httpLink = createUploadLink({
    uri: `${host}/graphql`,
  });


  return new ApolloClient<NormalizedCacheObject>({
    link: httpLink,
    cache: new InMemoryCache(inMemoryCacheConfig),
  });
}

