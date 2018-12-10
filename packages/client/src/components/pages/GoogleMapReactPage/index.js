import React from 'react'
import { Link } from 'react-router-dom'
import Map from './Map'

const GoogleMapReactPage = () => {
  return (
    <div>
      <h2>Google Map React Page</h2>
      <div>
        <Link to="/">Back to Home Page</Link>
        <Map />
      </div>
    </div>
  )
}

export default GoogleMapReactPage
