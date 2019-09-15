import React from "react";


const HikeInfo = props => {
    return (
        <div className="trail-info">
            <img src={props.trail.imgSmall} alt={props.trail.name} />
            <div className="details">

            <h3>{props.trail.name}</h3>
            <a href={props.trail.url}><i class="fas fa-hiking"></i></a>            <p><strong>Length: </strong>{props.trail.length}</p>
            <p><strong>Elevation gain: </strong>{props.trail.high-= props.trail.low}</p>
            <p><strong>Description: </strong>{props.trail.summary}</p>
            </div>
        </div>
    )
}

export default HikeInfo;