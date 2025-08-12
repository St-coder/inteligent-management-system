import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import userReducer from './userSlice';
import contractReducer from './contractSlice';

export const store = configureStore({
    reducer:{
        authReducer,
        userReducer,
        contractReducer,
    }
})