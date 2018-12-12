import React from 'react'
import { Link } from 'react-router-dom'
import Map from '../../patterns/molecules/map/Map'
import { startPageRoute } from '../../routes'
import Header from '../../patterns/molecules/navigation/Header'

const DemoReactPage = () => {
  return (
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
                <Map />
            </div>
          </div>
       </div>
    </div>
  )
}

export default DemoReactPage
