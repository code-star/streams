import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import GoogleMapReactPage from './components/pages/GoogleMapReactPage';
import ReactGoogleMapsPage from './components/pages/ReactGoogleMapsPage';
import ReactLeafletPage from './components/pages/ReactLeafletPage';

function addDivWithIdToBody() {
  const appElement = document.createElement("div");
  appElement.id = 'app';
  document.body.appendChild(appElement);
}

addDivWithIdToBody()

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/google-map-react" component={GoogleMapReactPage} />
        <Route path="/react-google-maps" component={ReactGoogleMapsPage} />
        <Route path="/react-leaflet" component={ReactLeafletPage} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
