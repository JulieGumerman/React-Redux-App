import { FETCH_TRAILS_START, FETCH_TRAILS_SUCCESS, FETCH_TRAILS_FAILURE } from "../actions";

const initialState = {
    trails: [],
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
        default: 
            return state;
    }
}