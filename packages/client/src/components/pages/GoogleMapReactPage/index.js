import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import Marker from '../../patterns/atoms/map/Marker'
import {list} from '../../../data/stations.js'

console.log('~list~', list);
const MarkerComponent = ({lat, lng, text}) => (
  <div>
    <Marker
      text={text}
      label={true}
      active={true}
      lat={lat}
      lng={lng}
    />
  </div>
);

class SimpleMap extends React.Component {
  constructor(props) {
    super(props)

    const {lat, lng} = list[0]
    this.state = {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 11
    }
  }

  render() {
    console.log('~this.state.center~', this.state.center);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {
            list.map((item) => (
              <MarkerComponent
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                text={'some place'}
              />
            ))
          }
        </GoogleMapReact>
      </div>
    );
  }
}

const GoogleMapReactPage = () => {
  return (
    <div>
      <h2>Google Map React Page</h2>
      <div>
        <Link to="/">Back to Home Page</Link>
        <SimpleMap />
      </div>
    </div>
  )
}

export default GoogleMapReactPage;
