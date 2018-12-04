import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/google-map-react">GoogleMapReact</Link>
        </li>
        <li>
          <Link to="/react-google-maps">ReactGoogleMaps</Link>
        </li>
        <li>
          <Link to="/react-leaflet">ReactLeaflet</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage;
