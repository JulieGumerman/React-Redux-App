import React, { useEffect} from "react";

import { connect } from "react-redux";
import { getTrails } from "../actions/mtbActions";
import TrailInfo from "./TrailInfo"
import Header from "./Header";

function BikeTrails({trails, getTrails, isFetching, error}) {
  useEffect(() => {
    getTrails();
  }, [getTrails]);

  return (
    <>
    <Header />
    <div className="container">
      <h2>Mountain Bike Trails</h2>
      <div className="wrapper">
      {trails.map(trail => <TrailInfo trail={trail} />)}
      </div>
      <div className="footer">
        <p>API and information therein courtesy of Mountain Bike Project</p>
      </div>
    </div>
    </>
  );
}
const mapStateToProps = state => {
  return {
    trails: state.trails, 
    isFetching: state.isFetching, 
    error: ""
  }
}

export default connect (mapStateToProps, {getTrails})(BikeTrails);