<p align="center">
  <img width="500px" src="/logo.png">
</p>

<h1 align="center">Codestar Streams</h1>

<p align="center">Streaming Platform Demo</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/streams-client">
    <img alt="" src="https://img.shields.io/npm/v/streams-client.svg">
  </a>

  <a aria-label="travis build" href="https://travis-ci.org/code-star/streams">
    <img alt="" src="https://img.shields.io/travis/code-star/streams.svg?logo=travis">
  </a>

  <a aria-label="downloads" href="http://npm-stat.com/charts.html?package=streams-client&from=2018-10-13">
    <img alt="" src="https://img.shields.io/npm/dm/streams-client.svg">
  </a>

  <a aria-label="last commit" href="https://github.com/code-star/streams/commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/code-star/streams.svg">
  </a>

  <a aria-label="contributors graph" href="https://github.com/code-star/streams/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/code-star/streams.svg">
  </a>

  <a aria-label="license" href="https://github.com/code-star/streams/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/code-star/streams.svg" alt="">
  </a>
</p>

## Status

**⚠️ This project is a work in progress and is not ready for production use yet!**

## Client
- Apollo GraphQL Client running at https://streams.codestar.nl/

## Server
- Apollo GraphQL Server running at https://streams-server.herokuapp.com/

## Installation for local development

Install project:
```bash
npm install
```

Install `client`:
```bash
cd packages/client
npm install
```

Install `server`:
```bash
cd packages/server
npm install
```

Test the project:
```bash
npm run ci
```

Before starting the server you need to create some `.env` files with the keys for the external libs:
- For local development of the `client` create a file in `packages/client` called `.env.develop`
- For the production release create a file in `packages/client` called `.env.release`
- For local development of the `server` create a file in `packages/server` called `.env`

Start the `server`
```bash
cd packages/server
npm start
```
This will open a browser on http://localhost:4000/ with the GraphiQL editor. 
You can try the following query:
```graphql
  query GetStations {
    stations(pageSize: 10) {
      stations {
        id
        lat
        lng
        text
        isFocussed
        isSelected
      }
    }
  }
```

Start the client
```bash
cd packages/client
npm start
```
This will open front-end app on http://localhost:8080/


## License

[MIT](./LICENSE) &copy; [CODE.STΛR](https://github.com/code-star)
