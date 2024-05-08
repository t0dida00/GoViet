const initialState = {
    trips: [],
    selectedTrip: null
};

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRIPS':
            return {
                ...state,
                trips: action.payload,
            };
        case 'SET_SELECTED_TRIP':
            return {
                ...state,
                selectedTrip: action.payload,
            };
        default: {
            return { ...state };
        }
    }
};

export default tripReducer;