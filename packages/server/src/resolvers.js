const { paginateResults } = require('./utils')

module.exports = {
  Query: {
    stations: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allStations = await dataSources.stationAPI.getAllStations()
      allStations.reverse()

      const stations = paginateResults({
        after,
        pageSize,
        results: allStations,
      })

      return {
        stations,
        cursor: stations.length ? stations[stations.length - 1].cursor : null,
        hasMore: stations.length
          ? stations[stations.length - 1].cursor !==
            allStations[allStations.length - 1].cursor
          : false,
      }
    },
  },
}
