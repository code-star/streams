import React from 'react'
import { Link } from 'react-router-dom'
import Map from './Map'
import { startPageRoute } from '../../routes'

const DemoReactPage = () => {
  return (
    <div>
      <Link to={startPageRoute}>Back to Start Page</Link>
      <Map />
    </div>
  )
}

export default DemoReactPage
