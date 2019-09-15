import React, { useEffect } from "react";

import Header from "./Header";
import HikeInfo from "./HikeInfo";

import { connect } from "react-redux";
import { getHikes } from "../actions/hikeActions"


const HikeTrails = ({getHikes, hiketrails}) => {

    useEffect(() => {
        getHikes();
    }, [getHikes]);

    console.log(hiketrails)

    return (
        <div>
            <Header />
            <h3>I can has hike.</h3>
            <div className="wrapper">
                {hiketrails.map((trail => <HikeInfo key={trail.id} trail={trail} />))}
            </div>
            <div className="footer">
                <p>API and information therein courtesy of Hiking Project</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        hiketrails: state.hikeTrails,
        isFetching: state,
        error: ""
    }
}

export default connect(mapStateToProps, {getHikes})(HikeTrails);