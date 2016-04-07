var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <h1>Hello {this.props.route.name}</h1>
    );
  }
});

module.exports = Main;
