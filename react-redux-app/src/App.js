import React from 'react';
import './App.css';

import { connect } from "react-redux";

function App({trails}) {
  return (
    <div className="App">
      <h1>Mountain Bike Trails</h1>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    trails: state.trails, 
    isFetching: state.isFetching, 
    error: ""
  }
}

export default connect (mapStateToProps, {})(App);
