var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var Header = require('./Header');
var Loading = require('./Loading');
var styles = require('../styles/styles');

function Detail(props){
  return (
    <h1>Details</h1>
  );
}

Detail.propTypes = {
  details: PropTypes.object.isRequired
}

module.exports = Detail;
