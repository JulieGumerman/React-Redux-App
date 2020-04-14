import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header"

const Home = () => {
    return (
        <div>
        <Header />
        <div className="home-screen">
            <div className="banner">
               <h3>There's no place like home...especially if you live in Colorado! Now find an adventure for this weekend!</h3>
               <div className="link-holder">
                    <Link className="nav-button" to="/hike-trails">Hike</Link>
                    <Link className="nav-button" to="/mtb-trails">Bike</Link>
                    <Link className="nav-button" to="/climbing-routes">Climb</Link>
               </div>

            </div>

        </div>

        </div>
    )
}

export default Home;