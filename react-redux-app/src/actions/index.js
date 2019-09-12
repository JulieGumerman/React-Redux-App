import axios from "axios";

export const FETCH_TRAILS_START = "FETCH_TRAILS_START";
export const FETCH_TRAILS_SUCCESS = "FETCH_TRAILS_SUCCESS";
export const FETCH_TRAILS_FAILURE = "FETCH_TRAILS_FAILURE";

export const getTrails = () => dispatch => {
    dispatch ({ type: FETCH_TRAILS_START});
    axios.get("https://www.mtbproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200453524-a27ac8444b13e58808b336d4a99a3f9f")
        .then(response => console.log(response))
        .catch(err => console.log(err))
}