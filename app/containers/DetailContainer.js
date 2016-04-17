var React = require('react');
var Detail = require('../components/Detail');
var Header = require('../components/Header');

var DetailContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true
    }
  },
  componentDidMount: function () {
    this.setState({
      isLoading: false
    });
  },
  render: function(){
    return (
      <div>
        <Header/>
        <Detail
          details={this.props.location.state.details}
          city={this.props.routeParams.city}/>
      </div>
    );
  }
});

module.exports = DetailContainer;
