import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import imageReducer from './imageSlice';

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            image: imageReducer,
        }
    }
)

export default appStore;