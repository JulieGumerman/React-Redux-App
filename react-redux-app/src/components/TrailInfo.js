import React from "react";

const TrailInfo = props => {
    return (
        <div>
            <img src={props.trail.imgSmall} alt={props.trail.name}/>
            <h3>{props.trail.name}</h3>
            <p><strong>{props.trail.location}</strong></p>
            <p><strong>Length:</strong> {props.trail.length}</p>
            <p><strong>Difficulty:</strong> {props.trail.difficulty}</p>
            <p><strong>Description:</strong> {props.trail.summary}</p>

            
        </div>
    );
}

export default TrailInfo;