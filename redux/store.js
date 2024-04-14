import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you'll create reducers later

const store = configureStore({
    reducer: rootReducer,
});

export default store;