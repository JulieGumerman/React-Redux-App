import { FETCH_TRAILS_START, FETCH_TRAILS_SUCCESS, FETCH_TRAILS_FAILURE } from "../actions/mtbActions";
import { FETCH_ROUTES_START, FETCH_ROUTES_FAILURE, FETCH_ROUTES_SUCCESS} from "../actions/climbActions";
import {FETCH_HIKES_START, FETCH_HIKES_SUCCESS, FETCH_HIKES_FAILURE} from "../actions/hikeActions";


const initialState = {
    trails: [],
    routes: [],
    hikeTrails: [],
    isFetching: false,
    error: ""
}

export const trailReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_TRAILS_START: 
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_TRAILS_FAILURE: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_TRAILS_SUCCESS: 
            return {
                ...state,
                error: "",
                isFetching: false,
                trails: action.payload
            }
        case FETCH_ROUTES_START:
                return {
                    ...state, 
                    isFetching: true
                }
        case FETCH_ROUTES_FAILURE:
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
        case FETCH_ROUTES_SUCCESS: 
                return {
                    ...state,
                    isFetching: false,
                    routes: action.payload
                }
        case FETCH_HIKES_START: 
                return {
                    ...state, 
                    isFetching: true, 
                    error: ""
                }
        case FETCH_HIKES_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    hikeTrails: action.payload
                }
        case FETCH_HIKES_FAILURE: 
                return {
                    ...state,
                    isFetching: false,
                    error: action.payload
                }
        default: 
            return state;
    }
}