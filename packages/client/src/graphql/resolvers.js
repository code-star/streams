/* eslint import/prefer-default-export: 0 */
import gql from 'graphql-tag'

export const typeDefs = gql`
  extend type Query {
    stations(
      pageSize: Int
      after: String
    ): StationConnection!
    station(id: String!): Station
  }

  extend type StationConnection {
    cursor: String!
    hasMore: Boolean!
    stations: [Station]!
  }

  extend type Station {
    id: String!
    lat: Float!
    lng: Float!
    text: String!
    isFocussed: Boolean!
    isSelected: Boolean!
  }`
