/* eslint-disable */
import React from 'react'
import { arrayOf, shape, number, string, bool } from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import Marker from '../../atoms/map/Marker'
import client from '../../../graphql/client'

const K_MARGIN_TOP = 60
const K_MARGIN_RIGHT = 30
const K_MARGIN_BOTTOM = 30
const K_MARGIN_LEFT = 30
const SEARCH_BOX_WIDTH = 330
const LATITUDE = 'lat'
const LONGITUDE = 'lng'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      center: undefined,
      zoom: undefined,
      ready: false,
      items: this.props.items
    }
  }

  componentWillReceiveProps(nextProps) {
      if (!this.state.ready) return;

      const prevItem = this.props.items.find((item) => item.isSelected);
      const nextItem = nextProps.items.find((item) => item.isSelected);

      const prevItemId = prevItem ? prevItem.id : false;
      const nextItemId = nextItem ? nextItem.id : false;

      if (nextItemId && nextItemId !== prevItemId) {
          this.updateCenterZoom(nextProps, nextItem);
          return;
      }

      // update center if list length changes
      if (nextProps.showLimit !== this.props.showLimit || (nextProps.items.length > 0 && nextProps.items.length !== this.props.items.length)) {
          this.updateCenterZoom(nextProps);
          return;
      }

      if (!nextItemId && nextItemId !== prevItemId) {
          this.updateCenterZoom(nextProps);
          return;
      }
  }

  onClickMarker = (itemId) => {
    const items = this.state.items
    items
      .map(item => {
        item.isSelected = false
        item.isFocussed = false
        return item
      })
      .find(item => item.id === itemId).isSelected = true
    this.setState(items)
  }

  onReady = () => {
    this.setState({
        ready: true
    })

    this.updateCenterZoom(this.props, this.props.items[0])
  }

  onChange = (state) => {
      this.setState({
          center: state.center,
          zoom: state.zoom
      });
  }

  updateCenterZoom(props, selectedItem) {
      if (!this.maps) {
          return
      }

      if (props.items.length === 0) {
          return
      }

      try {
          const { showLimit } = props
          const maps = this.maps.maps_

          const height = this.rootNode.clientHeight
          const width = this.rootNode.clientWidth

          const size = {
              width: (width >= 600 ? width - SEARCH_BOX_WIDTH : width),
              height: height
          }

          let { center: prevCenter, zoom } = this.state
          let center = Object.assign({}, prevCenter) // fresh reference

          // center selected item
          if (selectedItem) {
              center = {
                  lat: selectedItem[LATITUDE] * 1,
                  lng: selectedItem[LONGITUDE] * 1
              }

              zoom = 15

          // center based on group of items
          } else {
              const latLngBounds = new maps.LatLngBounds()

              props.items.slice(0, showLimit).forEach((item) => {
                  const latLng = new maps.LatLng(item[LATITUDE] * 1, item[LONGITUDE] * 1)
                  latLngBounds.extend(latLng)
              })

              const bounds = {
                  ne: {
                      lat: latLngBounds.getNorthEast().lat(),
                      lng: latLngBounds.getNorthEast().lng()
                  },
                  sw: {
                      lat: latLngBounds.getSouthWest().lat(),
                      lng: latLngBounds.getSouthWest().lng()
                  }
              }

              // if all lat/lngs have the same coordinates
              if (bounds.ne.lat === bounds.sw.lat && bounds.ne.lng === bounds.sw.lng) {
                  center = {
                      lat: bounds.ne.lat,
                      lng: bounds.ne.lng
                  }
                  zoom = 15

              // else calculate center of lat /lngs
              } else {
                  let fb = fitBounds(bounds, size)
                  center = fb.center
                  zoom = fb.zoom
              }
          }

          // consider offset for min-width 600px
          if (width >= 600) {
              const widthOfPanel = SEARCH_BOX_WIDTH
              const degreesPerTile = 360 / Math.pow(2, zoom)
              const degreesPerPx = degreesPerTile / 256
              const degreesForPanel = degreesPerPx * widthOfPanel
              center.lng = center.lng - degreesForPanel / 2
          }

          this.setState({ center, zoom })

      } catch(e) {
          console.error(e)
      }

  }

  render() {
    const { initialZoom, apiKey, showLimit, items } = this.props;
    const { center, zoom } = this.state;
    const initialCenter = {lat: items[0].lat, lng: items[0].lng}

    const markers = items.slice(0, showLimit).map((item, index) => {
        return (
          <Marker
            key={item.id}
            lat={item[LATITUDE] * 1}
            lng={item[LONGITUDE] * 1}
            text={item.text}
            label={true}
            active={item.isFocussed || item.isSelected}
          />
        )
    })

    return (
      <div style={{ height: '100vh', width: '100%' }}
        ref={(node) => (this.rootNode = node)}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          onGoogleApiLoaded={this.onReady}
          onChildClick={this.onClickMarker}
          onChange={this.onChange}
          ref={(node) => (this.maps = node)}
          margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
          defaultCenter={initialCenter}
          defaultZoom={initialZoom}
          center={center}
          zoom={zoom}
        >
          {markers}
        </GoogleMapReact>
      </div>
    )
  }
}

Map.propTypes = {
  initialZoom: number,
  apiKey: string,
  showLimit: number,
  items: arrayOf(
    shape({
      id: string,
      lat: number,
      lng: number,
      text: string,
      isFocussed: bool,
      isSelected: bool,
    })
  ),
}

Map.defaultProps = {
  initialZoom: 11,
  apiKey: process.env.API_KEY,
  showLimit: 10,
}

export default Map
/* eslint-enable */
