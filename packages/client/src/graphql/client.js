import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { typeDefs } from './resolvers'

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    // uri: 'https://streams-server.herokuapp.com/graphql',
    uri: 'http://localhost:4000/graphql',
  }),
  typeDefs,
})


export default client
