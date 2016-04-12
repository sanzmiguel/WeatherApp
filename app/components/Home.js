var React = require('react');
var ReactDOM = require('react-dom');
var styles = require('../styles/styles');
var Header = require('./Header');
var SearchFormContainer = require('../containers/SearchFormContainer');

function Home(){
  return (
    <div style={styles.mainContainer}>
      <Header/>
      <div style={styles.container}>
        <h1 style={styles.entryText}>Enter a City and State</h1>
        <SearchFormContainer styles={styles.formControls}/>
      </div>
    </div>
  );
}

module.exports = Home;
