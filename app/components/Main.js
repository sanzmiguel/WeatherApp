var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');

var Main = React.createClass({
  render: function(){
    return (
      this.props.children
    );
  }
});

module.exports = Main;
