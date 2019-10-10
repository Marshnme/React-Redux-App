

const initialState = {
    goats: [],
    isFetching: false,
    error: ""
};


    export const goatReducer = (state = initialState, action) => {
        switch(action.type){
            default:
                return state;
        };
    };