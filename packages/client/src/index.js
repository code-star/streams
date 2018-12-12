import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/pages/StartPage';
import DemoPage from './components/pages/DemoMapReactPage';
import { startPageRoute, demoPageRoute } from './routes'

function addDivWithIdToBody() {
  const appElement = document.createElement("div");
  appElement.id = 'app';
  document.body.appendChild(appElement);
}

addDivWithIdToBody()

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={startPageRoute} component={StartPage} />
        <Route exact path={demoPageRoute} component={DemoPage} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
