import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name:'authSlice',
    initialState: {
        token: sessionStorage.getItem('token') || null,
        userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo') || '{}') : null,
    },
    reducers: {
        setToken(state, action){
            state.token = action.payload;
            sessionStorage.setItem('token', action.payload)
        },
        clearToken(state){
            state.token = null;
            sessionStorage.removeItem('token');
        },
        setUserInfo(state, action){
            state.userInfo = action.payload;
            sessionStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        clearUserInfo(state){
            state.userInfo = null;
            sessionStorage.removeItem('userInfo');
        }
    }
})

export const { setToken, clearToken, setUserInfo, clearUserInfo } = authSlice.actions;

export default authSlice.reducer;