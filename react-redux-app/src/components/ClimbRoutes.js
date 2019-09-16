import React, { useEffect } from "react";

import Header from "./Header";
import RouteInfo from "./RouteInfo";
import { connect } from "react-redux";
import { getRoutes } from "../actions/climbActions";

const ClimbRoutes = ({routes, getRoutes }) => {
    useEffect(() => {
        getRoutes();
    }, [getRoutes]);
    console.log(routes);
    return (
        <div>
            <Header />
            <h2>Climbing Routes</h2>
            <div className="wrapper">
            {routes.map(route => <RouteInfo key={route.id} route={route} />)}
            </div>
            <div className="footer">
            <p>API and information therein courtesy of Mountain Project.</p>
        </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        routes: state.routes,
        isFetching: state.isFetching, 
        error: ""
}

}

export default connect (mapStateToProps, {getRoutes})(ClimbRoutes);