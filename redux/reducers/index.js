import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: authReducer,
    // user: userReducer,
    // other reducers can be added here
});

export default rootReducer;