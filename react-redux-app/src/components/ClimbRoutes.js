import React, { useEffect } from "react";

import Header from "./Header";
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
            <h3>Yay! Climbing!!!</h3>
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