import React from 'react'
import { arrayOf, shape, number, string } from 'prop-types'
import GoogleMapReact from 'google-map-react'
import Marker from '../../patterns/atoms/map/Marker'
import { list } from '../../../data/stations.js'
import { fitBounds } from 'google-map-react/utils';

const K_MARGIN_TOP = 60;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;
const SEARCH_BOX_WIDTH = 330;
const LATITUDE = 'Latitude';
const LONGITUDE = 'Longitude';

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

    this.updateCenterZoom(this.props, this.props.items[0])
  }

  updateCenterZoom(props, selectedItem) {
      console.log('~updateCenterZoom~', props, selectedItem);

      if (!this.maps) {
          return;
      }

      if (props.items.length === 0) {
          return;
      }

      try {
          const { showLimit } = props;
          const maps = this.maps.maps_;

          const height = this.rootNode.clientHeight;
          const width = this.rootNode.clientWidth;

          const size = {
              width: (width >= 600 ? width - SEARCH_BOX_WIDTH : width),
              height: height
          };

          console.log('~size~', size);

          let { center: prevCenter, zoom } = this.state;
          let center = Object.assign({}, prevCenter); // fresh reference

          // center selected agent
          if (selectedItem) {
              center = {
                  lat: selectedItem[LATITUDE] * 1,
                  lng: selectedItem[LONGITUDE] * 1
              };

              zoom = 15;

          // center based on group of agents
          } else {
              const latLngBounds = new maps.LatLngBounds();

              props.items.slice(0, showLimit).forEach((item) => {
                  const latLng = new maps.LatLng(item[LATITUDE] * 1, item[LONGITUDE] * 1);
                  latLngBounds.extend(latLng);
              });

              const bounds = {
                  ne: {
                      lat: latLngBounds.getNorthEast().lat(),
                      lng: latLngBounds.getNorthEast().lng()
                  },
                  sw: {
                      lat: latLngBounds.getSouthWest().lat(),
                      lng: latLngBounds.getSouthWest().lng()
                  }
              };

              // if all lat/lngs have the same coordinates
              if (bounds.ne.lat === bounds.sw.lat && bounds.ne.lng === bounds.sw.lng) {
                  center = {
                      lat: bounds.ne.lat,
                      lng: bounds.ne.lng
                  };
                  zoom = 15;

              // else calculate center of lat /lngs
              } else {
                  let fb = fitBounds(bounds, size);
                  center = fb.center;
                  zoom = fb.zoom;
              }
          }

          // consider offset for min-width 600px
          if (width >= 600) {
              const widthOfPanel = SEARCH_BOX_WIDTH;
              const degreesPerTile = 360 / Math.pow(2, zoom);
              const degreesPerPx = degreesPerTile / 256;
              const degreesForPanel = degreesPerPx * widthOfPanel;
              center.lng = center.lng - degreesForPanel / 2;
          }

          this.setState({ center, zoom });

      } catch(e) {
          console.error(e); // eslint-disable-line no-console
      }

  }

  render() {
    const { items } = this.props

    return (
      <div style={{ height: '100vh', width: '100%' }}
        ref={(node) => (this.rootNode = node)}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          onGoogleApiLoaded={this.onReady}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          ref={(node) => (this.maps = node)}
        >
          {
            items.map((item) => (
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

Map.propTypes = {
  items: arrayOf(
    shape({
      id: string,
      lat: number,
      lng: number,
    })
  ),
  showLimit: number
}

Map.defaultProps = {
  items: list,
  showLimit: 4
}

export default Map
