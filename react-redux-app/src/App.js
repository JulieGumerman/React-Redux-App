import React from 'react';
import './App.scss';
import { Route } from "react-router-dom";

import Home from "./components/Home";
import BikeTrails from "./components/BikeTrails";
import ClimbRoutes from "./components/ClimbRoutes";
import HikeTrails from "./components/HikeTrails";

function App() {
  return (
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/climbing-routes" component={ClimbRoutes} />
    <Route path="/mtb-trails" component={BikeTrails} />
    <Route path = "/hike-trails" component={HikeTrails} />
    </div>
  )
}


export default App;

