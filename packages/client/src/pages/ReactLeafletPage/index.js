import React from 'react'
import { Link } from 'react-router-dom'
import {
  Circle,
  CircleMarker,
  Map,
  Marker,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
  Tooltip,
} from 'react-leaflet'

const center = [51.505, -0.09]

const multiPolygon = [
  [[51.51, -0.12], [51.51, -0.13], [51.53, -0.13]],
  [[51.51, -0.05], [51.51, -0.07], [51.53, -0.07]],
]

const rectangle = [[51.49, -0.08], [51.5, -0.06]]

class ReactLeafletPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: 0,
    }
  }

  onClickCircle() {
    this.setState({ clicked: this.state.clicked + 1 })
  }

  render() {
    const clickedText =
      this.state.clicked === 0
        ? 'Click this Circle to change the Tooltip text'
        : `Circle click: ${this.state.clicked}`

    return (
      <Map center={center} zoom={13}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={center}
          fillColor="blue"
          onClick={this.onClickCircle}
          radius={200}>
          <Tooltip>{clickedText}</Tooltip>
        </Circle>
        <CircleMarker center={[51.51, -0.12]} color="red" radius={20}>
          <Tooltip>Tooltip for CircleMarker</Tooltip>
        </CircleMarker>
        <Marker position={[51.51, -0.09]}>
          <Popup>Popup for Marker</Popup>
          <Tooltip>Tooltip for Marker</Tooltip>
        </Marker>
        <Polygon color="purple" positions={multiPolygon}>
          <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
        </Polygon>
        <Rectangle bounds={rectangle} color="black">
          <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
            permanent Tooltip for Rectangle
          </Tooltip>
        </Rectangle>
      </Map>
    )
  }
}

export default ReactLeafletPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// class ReactLeafletPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13,
//     }
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <div>
//         <h2>React Leaflet Page</h2>
//         <Link to="/">Back to Home Page</Link>
//         <Map center={position} zoom={this.state.zoom}>
//           <TileLayer
//             attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={position}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </Map>
//       </div>
//     )
//   }
// }

// export default ReactLeafletPage
