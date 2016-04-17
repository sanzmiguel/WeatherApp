var React = require('react');
var DayItem = require('../components/DayItem');

var DayItemContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleDetailCity: function(event){
    event.preventDefault();
    var that = this;
    this.context.router.push({
      pathname: '/detail/' + that.props.city,
      state: {
        details: that.props.data
      }
    });
  },
  render: function(){
    return (
      <DayItem data={this.props.data} onDetailCity={this.handleDetailCity}/>
    );
  }
});

module.exports = DayItemContainer;
