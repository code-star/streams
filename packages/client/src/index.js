import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage';
import DemoPage from './pages/DemoPage';
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
