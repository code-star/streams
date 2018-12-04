import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const ReactLeafletPage = () => {
  return (
    <div>
      <h2>React Leaflet Page</h2>
      <div>
        <Link to="/">Back to Home Page</Link>
      </div>
      <div>
        test
      </div>
    </div>
  )
}

export default ReactLeafletPage;
