import React from 'react';
import './App.scss';

import BikeTrails from "./components/BikeTrails";

function App() {
  return (
    <BikeTrails />
  )
}

// import { connect } from "react-redux";
// import { getTrails } from "./actions/index";
// import TrailInfo from "./components/TrailInfo"

// function App({trails, getTrails, isFetching, error}) {
//   useEffect(() => {
//     getTrails();
//   }, [getTrails]);

//   return (
//     <div className="App">
//       <h1>Mountain Bike Trails</h1>
//       <div className="wrapper">
//       {trails.map(trail => <TrailInfo trail={trail} />)}
//       </div>
//       <div className="footer">
//         <p>API and information therein courtesy of Mountain Bike Project</p>
//       </div>
//     </div>
//   );
// }
// const mapStateToProps = state => {
//   return {
//     trails: state.trails, 
//     isFetching: state.isFetching, 
//     error: ""
//   }
// }
export default App;
// export default connect (mapStateToProps, {getTrails})(App);
