import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Assuming you'll create reducers later

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;