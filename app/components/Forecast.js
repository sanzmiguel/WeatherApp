var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header');

function Forecast(){
  return (
    <div>
      <Header />
      <h1>Forecast component</h1>
    </div>
  );
}

module.exports = Forecast;
