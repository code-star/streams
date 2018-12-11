import React from 'react'
import { Link } from 'react-router-dom'
import PersistentDrawer from '../../patterns/molecules/navigation/PersistentDrawer'
import Map from './Map'
import Typography from '@material-ui/core/Typography';

const GoogleMapReactPage = () => {
  return (
    <div>
      <PersistentDrawer>
        <Link to="/"><Typography paragraph>Back to Start Page</Typography></Link>
        <Map />
      </PersistentDrawer>
    </div>
  )
}

export default GoogleMapReactPage
