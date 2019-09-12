import React, { useEffect } from 'react';
import './App.css';

import { connect } from "react-redux";
import { getTrails } from "./actions/index";

function App({trails, getTrails, isFetching, error}) {
  useEffect(() => {
    getTrails();
  }, [getTrails]);

  return (
    <div className="App">
      <h1>Mountain Bike Trails</h1>
      {trails.map(trail => <h3>{trail.name}</h3>)}
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

export default connect (mapStateToProps, {getTrails})(App);
