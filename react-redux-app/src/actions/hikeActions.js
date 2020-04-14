import axios from "axios";

export const FETCH_HIKES_START = "FETCH_HIKES_START";
export const FETCH_HIKES_FAILURE = "FETCH_HIKES_FAILURE";
export const FETCH_HIKES_SUCCESS = "FETCH_HIKES_SUCCESS";

export const getHikes = () => dispatch => {
    dispatch({type: FETCH_HIKES_START});
    axios.get("https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200453524-a27ac8444b13e58808b336d4a99a3f9f")
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_HIKES_SUCCESS, payload: response.data.trails})
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FETCH_HIKES_FAILURE, payload: `${error}`})
        })
}