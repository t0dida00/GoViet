import { SET_TO_LOCATION, SET_FROM_LOCATION } from '../types';

export const setToLocation = (location) => ({
    type: SET_TO_LOCATION,
    payload: location
});

export const setFromLocation = (location) => ({
    type: SET_FROM_LOCATION,
    payload: location
});

export const setAdditional = (data) => ({
    type: SET_ADDITIONAL_DATA,
    payload: data
});

