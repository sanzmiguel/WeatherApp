var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');

function SearchForm(props){
  return (
    <div style={props.styles}>
      <input className='form-control' placeholder='St. George, Utah' type='text' />
      <button className='btn btn-success' style={styles.botonBusqueda}>Get Weather</button>
    </div>
  );
}

module.exports = SearchForm;
