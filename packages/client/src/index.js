/* eslint no-console: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import gql from "graphql-tag"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StartPage from './pages/StartPage'
import DemoPage from './pages/DemoPage'
import { startPageRoute, demoPageRoute } from './routes'
import './index.scss'

function addDivWithIdToBody() {
  const appElement = document.createElement("div")
  appElement.id = 'app'
  document.body.appendChild(appElement)
}

addDivWithIdToBody()

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://streams-server.herokuapp.com/graphql',
  }),
})

client
  .query({
    query: gql`
      query GetStations {
        stations(pageSize: 3) {
          stations {
            id
            text
          }
        }
      }
    `,
  })
  .then(result => console.log('~result~', result))

const App = () => (
  <Router>
    <Switch>
      <Route exact path={startPageRoute} component={StartPage} />
      <Route exact path={demoPageRoute} component={DemoPage} />
    </Switch>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))

module.hot.accept()
