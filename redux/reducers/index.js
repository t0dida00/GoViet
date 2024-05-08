import { combineReducers } from 'redux';
import authReducer from './authReducer';
import publishReducer from './publishReducer';
import tripReducer from './tripReducer';
// import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: authReducer,
    publish: publishReducer,
    trip:tripReducer,
    
    // user: userReducer,
    // other reducers can be added here
});

export default rootReducer;