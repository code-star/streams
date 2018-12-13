const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    stations(
      pageSize: Int
      after: String
    ): StationConnection!
    station(id: String!): Station
  }

  type StationConnection {
    cursor: String!
    hasMore: Boolean!
    stations: [Station]!
  }

  type Station {
    id: String!
    lat: Float!
    lng: Float!
    text: String!
    isFocussed: Boolean!
    isSelected: Boolean!
  }
`
module.exports = typeDefs
