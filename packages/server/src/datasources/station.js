/* eslint class-methods-use-this: 0 */
const { RESTDataSource } = require('apollo-datasource-rest')
const { stations } = require('./stations.json')

class StationAPI extends RESTDataSource {
  async getAllStations() {
    return stations && stations.length ? stations.map(l => this.stationReducer(l)) : []
  }

  stationReducer(station) {
    return {
      id: station.id,
      lat: station.lat,
      lng: station.lng,
      text: station.text,
      isFocussed: station.isFocussed,
      isSelected: station.isSelected,
    }
  }

  async getStationById({ stationId }) {
    const res = await this.get('stations', { id: stationId })
    return this.stationReducer(res[0])
  }

  getStationsByIds({ stationIds }) {
    return Promise.all(
      stationIds.map(stationId => this.getStationById({ stationId })),
    )
  }
}

module.exports = StationAPI
