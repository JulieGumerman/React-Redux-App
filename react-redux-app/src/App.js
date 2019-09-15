import React from 'react';
import './App.scss';
import { Route } from "react-router-dom";

import Home from "./components/Home";
import BikeTrails from "./components/BikeTrails";
import ClimbRoutes from "./components/ClimbRoutes";

function App() {
  return (
    <div>
    <Route exact path="/home" component={Home} />
    <Route path="/climbing-routes" component={ClimbRoutes} />
    <Route path="/mtb-trails" component={BikeTrails} />
    </div>
  )
}


export default App;

