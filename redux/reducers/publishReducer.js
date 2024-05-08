import { SET_TO_LOCATION, SET_FROM_LOCATION, SET_ADDITIONAL_DATA } from '../types';

const initialState = {
    from: null,
    to: null
};

const publishReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_LOCATION:
            return {
                ...state,
                to: action.payload,
            };
        case SET_FROM_LOCATION:
            return {
                ...state,
                from: action.payload,
            };
        case SET_ADDITIONAL_DATA:
            return {
                ...state,
                from: action.payload,
            };
        default:
            return state;
    }
};

export default publishReducer;