import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from "../actions";

const initialState = {
    goats: {},
    isFetching: false,
    error: ""
};


    export const goatReducer = (state = initialState, action) => {
        switch(action.type){
            case START_FETCHING:
                return {
                    ...state,
                    isFetching: true,
                    error:""
                };
            case FETCH_SUCCESS:
                return{
                    ...state,
                    goats: action.payload,
                    isFetching: false,
                    error:""
                }
            case FETCH_FAILURE:
                    return{
                        ...state,
                        isFetching: false,
                        error: action.payload
                    }
            default:
                return state;
        };
    };



