import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import Marker from '../../patterns/atoms/map/Marker'

const SvgIconComponent = ({ text }) => (
  <div>
    <SvgIcon>
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </SvgIcon>
    {text}
  </div>
);

const lat = 52.09
const lng = 5.11

const MarkerComponent = () => (
  <div>
    <Marker
      text="some place"
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

    this.state = {
      center: {
        lat: lat,
        lng: lng
      },
      zoom: 11
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <MarkerComponent
            lat={lat}
            lng={lng}
            text={'some place'}
          />
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
