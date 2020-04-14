import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
            <Link className="home-nav" to="/"><h1>Weekend Adventure Hub</h1></Link>
            <div className="nav-bar">
                <Link className="nav" to="/hike-trails">Hike</Link>
                <Link className="nav" to="/mtb-trails">Mountain Bike</Link>
                <Link className="nav" to="/climbing-routes">Climb</Link>
            </div>
            </div>
        </div>
    )
}

export default Header;