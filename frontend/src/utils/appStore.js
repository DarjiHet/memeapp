import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import imageReducer from './imageSlice';
import userImageReducer from './userImagesSlice';

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            image: imageReducer,
            userImage: userImageReducer,
        }
    }
)

export default appStore;