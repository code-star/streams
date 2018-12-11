import React from 'react'
import PersistentDrawer from '../../patterns/molecules/navigation/PersistentDrawer'
import Typography from '@material-ui/core/Typography';

const StartPage = () => {
  return (
    <PersistentDrawer>
      <Typography paragraph>
        Codestar Streaming Platform Client Demo
      </Typography>
    </PersistentDrawer>
  )
}

export default StartPage
