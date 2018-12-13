/* eslint import/prefer-default-export: 0 */
import gql from 'graphql-tag'

export const STATIONS = gql`
  query GetStations {
    stations(pageSize: 10) {
      stations {
        id
        lat
        lng
        text
        isFocussed
        isSelected
      }
    }
  }
`
