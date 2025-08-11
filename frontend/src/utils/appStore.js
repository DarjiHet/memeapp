import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import imageReducer from './imageSlice';
import userImageReducer from './userImagesSlice';
import adminReducer from '../utils/adminSlice'

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            image: imageReducer,
            userImage: userImageReducer,
            admin: adminReducer,
        }
    }
)

export default appStore;