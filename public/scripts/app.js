'use strict';

console.log('App.js is running');

var renderJSX = function renderJSX() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Hello world'
    )
  );

  var appRoot = document.getElementById('app');

  ReactDOM.render(template, appRoot);
};

renderJSX();
