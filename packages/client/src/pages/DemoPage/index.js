import React from 'react'
import { Link } from 'react-router-dom'
import PersistentDrawer from '../../patterns/molecules/navigation/PersistentDrawer'
import Map from './Map'
import Typography from '@material-ui/core/Typography';
import { startPageRoute } from '../../routes'

const DemoReactPage = () => {
  return (
    <div>
      <PersistentDrawer>
        <Link to={startPageRoute}><Typography paragraph>Back to Start Page</Typography></Link>
        <Map />
      </PersistentDrawer>
    </div>
  )
}

export default DemoReactPage
