const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const StationAPI = require('./datasources/station');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    stationAPI: new StationAPI(),
  })
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
