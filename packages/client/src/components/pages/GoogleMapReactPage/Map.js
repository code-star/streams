import React from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../../patterns/atoms/map/Marker'
import {list} from '../../../data/stations.js'

class Map extends React.Component {
  constructor(props) {
    super(props)

    const {lat, lng} = list[0]

    this.state = {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 11,
      ready: false
    }
  }

  componentWillReceiveProps(nextProps) {
      if (!this.state.ready) return
  }

  onReady = () => {
    this.setState({
        ready: true
    })
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          onGoogleApiLoaded={this.onReady}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {
            list.map((item) => (
              <Marker
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                text={'some place'}
                label={true}
                active={false}
              />
            ))
          }
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
