import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import Map from '../../patterns/molecules/map/Map'
import { startPageRoute } from '../../routes'
import Header from '../../patterns/molecules/navigation/Header'
import { STATIONS } from '../../graphql/query'

const DemoReactPage = () => (
  <div>
    <Header>Codestar Streams</Header>
     <div className="d-flex flex-wrap flex-lg-nowrap">
        <div className="width-full">
          <div className="border p-3">
              <Link to={startPageRoute}>
                <button className="btn-link" type="button">Back to Start Page</button>
              </Link>
          </div>
          <div className="border p-3">
            <Query query={STATIONS}>
              {({ data }) => data.stations && data.stations.stations ? <Map items={data.stations.stations}/> : null}
            </Query>
          </div>
        </div>
     </div>
  </div>
)

export default DemoReactPage
