var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');

function Home(){
  return (
    <div style={styles.mainContainer}>
      <div style={styles.header}>
        <h1>Header</h1>
      </div>
      <div style={styles.container}>
        <h1 style={styles.entryText}>Enter a City and State</h1>
        <div style={styles.formControls}>
          <input className='form-control' placeholder='St. George, Utah' type='text' />
          <button className='btn btn-success' style={styles.botonBusqueda}>Get Weather</button>
        </div>
      </div>
    </div>
  );
}

module.exports = Home;
