import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDB88TWkadjTefmzNz5uVIaLB8_QiZC6XI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
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
