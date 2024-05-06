import { combineReducers } from 'redux';
import authReducer from './authReducer';
import publishReducer from './publishReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: authReducer,
    publish: publishReducer
    // user: userReducer,
    // other reducers can be added here
});

export default rootReducer;