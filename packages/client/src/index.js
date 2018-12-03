import React from 'react';
import ReactDOM from 'react-dom';

const appElement = document.createElement("div");
appElement.id = 'app';
document.body.appendChild(appElement);

const title = 'CodeStar Streams Client';

console.log('process.env', process.env)

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
