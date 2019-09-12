import React from "react";

const TrailInfo = props => {
    return (
        <div className="trail-info">
            <img src={props.trail.imgSmall} alt={props.trail.name}/>
            <div className="details">
                <h3>{props.trail.name}</h3>
                <p><strong>{props.trail.location}</strong></p>
                <i class="fas fa-biking"></i>
                <p><strong>Length:</strong> {props.trail.length}</p>
                <p><strong>Difficulty:</strong> {props.trail.difficulty}</p>

                <p><strong>Description:</strong> {props.trail.summary}</p>
            </div>
            
        </div>
    );
}

export default TrailInfo;