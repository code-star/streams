import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StartPage from './pages/StartPage'
import DemoPage from './pages/DemoPage'
import { startPageRoute, demoPageRoute } from './routes'
import './index.scss'
import client from './graphql/client'

function addDivWithIdToBody() {
  const appElement = document.createElement("div")
  appElement.id = 'app'
  document.body.appendChild(appElement)
}

addDivWithIdToBody()

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path={startPageRoute} component={StartPage} />
        <Route exact path={demoPageRoute} component={DemoPage} />
      </Switch>
    </ApolloProvider>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
