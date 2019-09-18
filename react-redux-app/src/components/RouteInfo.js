import React from "react";


const RouteInfo = props => {
    return (
        <div className="trail-info" key={props.route.id}>
            <img src={props.route.imgSmall} alt={props.route.name}/>
            <div className="details">
            <h3>{props.route.name}</h3>
            <a href={props.route.url}><i class="fas fa-mountain"></i></a>
                <p><strong>Location: </strong>
                <ul>
                    {props.route.location.map(place => 
                        <li>{place}</li>)}
                </ul>
            </p>
            <p><strong>Type: </strong>{props.route.type}</p>
            <p><strong>Pitches: </strong>{props.route.pitches}</p>
            <p><strong>Rating: </strong>{props.route.rating}</p>

            </div>
        </div>
    );
}


export default RouteInfo;